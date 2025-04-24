import { Media, UploadCard } from "@/types/types";
import api from "@/utils/api";

export class Cards {
  private audioSrc: string[] = [];
  private imageSrc: string[] = [];
  private cards: UploadCard[] = [];

  constructor(
    private readonly files: {
      audio: FileList | null;
      images: FileList | null;
    },
    private readonly media: Media
  ) {}

  checkAll() {
    if (!this.checkFiles()) return false;
    if (!this.checkMedia()) return false;

    const audioArr = Array.from(this.files.audio!).map((it) =>
      it.name.slice(0, -4)
    );
    const imagesArr = Array.from(this.files.images!).map((it) =>
      it.name.slice(0, -4)
    );

    for (let i = 0; i < audioArr.length; i++) {
      if (audioArr[i] !== imagesArr[i]) {
        this.error(`didnt find image with name ${audioArr[i]}`);
        return false;
      }
    }

    return true;
  }

  checkSrcs() {
    if (!this.audioSrc || !this.imageSrc) {
      this.error("audio or images src empty");
      return false;
    }
    return true;
  }

  private checkFiles() {
    if (!this.files.audio || !this.files.images) {
      this.error("audio or images empty");
      return false;
    }
    if (this.files.audio.length !== this.files.images.length) {
      this.error("audio and images have diferent count");
      return false;
    }
    return true;
  }

  private checkMedia() {
    if (!this.media.id) {
      this.error("Media não selecionada");
      return false;
    }
    return true;
  }

  async uploadCards() {
    this.createCards();
    if (!this.cards.length) return;
    try {
      await api(`${process.env.NEXT_PUBLIC_APP_URL}/api/data/cards`, {
        method: "POST",
        body: JSON.stringify({ data: this.cards }),
      });
    } catch (error: unknown) {
      this.error(`${(error as { message: string })?.message}`);
      throw error;
    }
  }

  async uploadFiles() {
    this.audioSrc = (await this.uploadFilesType("audio")) || [];
    this.imageSrc = (await this.uploadFilesType("images")) || [];
  }

  private async uploadFilesType(
    type: "audio" | "images"
  ): Promise<string[] | undefined> {
    const formData = new FormData();

    for (let i = 0; i < this.files[type]!.length; i++) {
      formData.append("files", this.files[type]![i]);
    }

    try {
      const response = await fetch(`/api/upload/${type}`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        return result.data;
      }
    } catch (error: unknown) {
      this.error(`${(error as { message: string })?.message}`);
      throw error;
    }
  }

  private sortFiles(arr: string[]) {
    return arr.sort((a, b) => {
      const titleA = a.split("_")[1].split(".")[0];
      const titleB = b.split("_")[1].split(".")[0];
      return titleA.localeCompare(titleB);
    });
  }

  private createCards() {
    const sortedAudioSrc = this.sortFiles(this.audioSrc);
    const sortedImageSrc = this.sortFiles(this.imageSrc);

    for (let i = 0; i < sortedAudioSrc.length; i++) {
      const card = {
        audio_src: sortedAudioSrc[i],
        image_src: sortedImageSrc[i],
        media_id: this.media.id,
      };
      this.cards.push(card);
    }
  }

  private error(error: string) {
    throw error;
  }
}

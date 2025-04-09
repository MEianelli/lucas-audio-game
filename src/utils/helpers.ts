export async function uploadFiles<T>(files: FileList, type: T) {
  if (!files.length) return;
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
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
    console.log(`${(error as { message: string })?.message}`);
    throw error;
  }
}

export const areFilesNamesTheSame = (files: {
  audio: FileList | null;
  images: FileList | null;
}) => {
  if (!files.audio || !files.images) {
    alert("audio or images empty");
    return false;
  }

  const audioArr = Array.from(files.audio).map((it) => it.name.slice(0, -4));
  const imagesArr = Array.from(files.images).map((it) => it.name.slice(0, -4));

  if (audioArr.length !== imagesArr.length) {
    alert("audio and images have diferent count");
    return false;
  }

  for (let i = 0; i < audioArr.length; i++) {
    if (audioArr[i] !== imagesArr[i]) {
      alert(`didnt find image with name ${audioArr[i]}`);
      return false;
    }
  }

  return true;
};

export function createFilesRef(mediaId: number, audioSrc: string[], imagesSrc: string[]) {
  const files = [];
  for (let i = 0; i < audioSrc.length; i++) {
    const card = {
      audio_src: audioSrc[i],
      image_src: imagesSrc[i],
      media_id: mediaId,
    };
    files.push(card);
  }
  return files;
}
/* EXAMPLE RETURN FROM CREATE CARDS
[
    {
        "audio_src": "audio/1741702068234_losers.mp3",
        "image_src": "images/1741702069085_losers.jpg",
        "movie_id": 4
    },
    {
        "audio_src": "audio/1741702068234_replay.mp3",
        "image_src": "images/1741702069085_replay.jpg",
        "movie_id": 4
    },
    {
        "audio_src": "audio/1741702068234_ventura.mp3",
        "image_src": "images/1741702069085_ventura.jpg",
        "movie_id": 4
    }
]*/

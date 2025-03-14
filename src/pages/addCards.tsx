import { Button } from "@/components/buttons/buttons";
import { Center } from "@/components/containers/containers";
import { Input } from "@/components/inputs/input";
import { FlexC } from "@/components/containers/flex";
import { Text } from "@/components/text/text";
import { useMemo, useRef, useState } from "react";
import { Span } from "@/components/containers/div";
import { Media, TBuckets } from "@/types/types";
import { GetServerSideProps } from "next";
import api from "@/utils/api";
import { Cards } from "@/lib/classes/Cards";

export const getServerSideProps: GetServerSideProps = async () => {
  const media = await api<Media[]>(
    "http://localhost:3000/api/data/media?select=id,title,wrongs",
    {
      method: "GET",
    }
  );

  if (!media.length) {
    return { props: {} };
  }

  return {
    props: {
      media: media,
    },
  };
};

const initialFiles = { audio: null, images: null };

const AddCards = (props: { media?: Media[] }) => {
  const [files, setFiles] = useState<{
    audio: FileList | null;
    images: FileList | null;
  }>(initialFiles);
  const [saving, setSaving] = useState(false);
  const [selectedmediaId, setSelectedmediaId] = useState<number | "">("");
  const audioRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const disableSave = useMemo(() => {
    return !(Object.values(files).length === 2);
  }, [files]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedmediaId(value === "" ? "" : Number(value));
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    type: TBuckets
  ) => {
    const files = event?.target?.files;
    if (!files?.length) return;
    setFiles((old) => ({ ...old, [type]: files }));
  };

  async function submitData() {
    setSaving(true);
    try {
      const selectedMedia = props.media?.find(
        (it) => it.id === selectedmediaId
      );
      const cards = new Cards(files, selectedMedia!);

      cards.checkAll();
      await cards.uploadFiles();
      await cards.uploadCards();

      reset("Novos Cards criados!");
    } catch (error: unknown) {
      reset(`${error}`);
    } finally {
      setSaving(false);
    }
  }

  function reset(error?: string) {
    if (error) alert(error);
    setSelectedmediaId("");
    setFiles(initialFiles);
    if (audioRef.current) audioRef.current.value = "";
    if (imageRef.current) imageRef.current.value = "";
  }

  return (
    <FlexC css={{ border: "10px solid purple", padding: "40px", gap: "16px" }}>
      <Text
        color={"green"}
        size={"b"}
        weight={"700"}
        css={{ textAlign: "center", marginBottom: "20px" }}
      >
        Add Card DASHBOARD
      </Text>
      <Center>
        <label htmlFor="media-select">Choose a media:</label>
        <select
          id="media-select"
          value={selectedmediaId}
          onChange={handleChange}
        >
          <option value="">-- Select a media --</option>
          {props?.media?.map((it) => (
            <option key={it.id} value={it.id}>
              {it.title}
            </option>
          ))}
        </select>
      </Center>
      <Center>
        <Text color={"text"}>Audio (só .mp3 até 5Mb)</Text>
        <Input
          type="file"
          onChange={(e) => handleFileUpload(e, "audio")}
          ref={audioRef}
          multiple
          css={{ width: "200px", color: "#fff" }}
        />
        <Span>
          {files.audio
            ? `${Object.keys(files?.audio).length} files selected`
            : "0 files"}
        </Span>
      </Center>
      <Center>
        <Text color={"text"}>Imagens (até 5Mb)</Text>
        <Input
          type="file"
          onChange={(e) => handleFileUpload(e, "images")}
          ref={imageRef}
          multiple
          css={{ width: "200px", color: "#fff" }}
        />
        <Span>
          {files.images
            ? `${Object.keys(files?.images).length} files selected`
            : "0 files"}
        </Span>
      </Center>
      <Center>
        <Button onClick={() => reset()}>NEW</Button>
        <Button disabled={disableSave || saving} onClick={submitData}>
          Save
        </Button>
      </Center>
    </FlexC>
  );
};

export default AddCards;

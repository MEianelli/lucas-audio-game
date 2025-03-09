import { Button } from "@/components/buttons/buttons";
import { Center } from "@/components/containers/containers";
import { Input, Textarea } from "@/components/inputs/input";
import { FlexC } from "@/components/containers/flex";
import { Text } from "@/components/text/text";
import { uploadMany, uploadMovie } from "@/lib/supabase";
import { useMemo, useRef, useState } from "react";
import { Span } from "@/components/containers/div";
import { TBuckets } from "@/types/types";
import { GenerateRandomCard } from "@/components/custom/Admin/GenerateRandomCard";

const initialFiles = { audio: null, images: null };

const Multiple = () => {
  const [files, setFiles] = useState(initialFiles);
  const [correct, setCorrect] = useState("");
  const [wrongs, setWrongs] = useState("");
  const [tags, setTags] = useState("");
  const [saving, setSaving] = useState(false);
  const audioRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const disableSave = useMemo(() => {
    return !(Object.values(files).length === 2 && !!correct && !!wrongs);
  }, [files, correct, wrongs]);

  function handleChangeAns(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setCorrect(e.target.value);
  }

  function handleChangeTags(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setTags(e.target.value);
  }

  function handleChangeWrongs(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    setWrongs(e.target.value);
  }

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    type: TBuckets
  ) => {
    const files = event?.target?.files;
    if (!files?.length) return;
    setFiles((old) => ({ ...old, [type]: files }));
  };

  async function submitData() {
    try {
      if (!files.audio || !files.images || !correct) {
        reset("Faltou algum arquivo, ou respostas, ARROMBADO!");
        return;
      }
      setSaving(true);
      const audios_src = await uploadMany(files.audio, "audio");
      const images_src = await uploadMany(files.images, "images");
      const data = {
        correct: correct.trim(),
        wrongs: wrongs.split(","),
        audios_src,
        images_src,
        tags: tags.split(","),
      };
      await uploadMovie(data);
      reset("Novo Resgistro salvo com sucesso! PALHAÇO");
    } catch (error: unknown) {
      reset(`${error}`);
    }
  }

  function reset(error?: string) {
    if (error) alert(error);
    setCorrect("");
    setWrongs("");
    setTags("");
    setSaving(false);
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
        Multiple DASHBOARD
      </Text>
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
            ? `${Object.keys(files?.images).length} files`
            : "0 files"}
        </Span>
      </Center>
      <Center>
        <Text color={"text"}>Respostas certa:</Text>
        <Input
          type="text"
          value={correct}
          onChange={handleChangeAns}
          css={{ border: "1px solid $red" }}
        />
      </Center>
      <Center>
        <Text color={"text"}>Possiveis erradas (separadas for virgula):</Text>
        <Textarea
          value={wrongs}
          onChange={handleChangeWrongs}
          css={{ border: "1px solid $red", height: "100px", width: "400px" }}
        />
      </Center>
      <Center>
        <Text color={"text"}>Tags (separadas for virgula):</Text>
        <Input
          type="text"
          value={tags}
          onChange={handleChangeTags}
          css={{ border: "1px solid $green" }}
        />
      </Center>
      <Center>
        <Button onClick={() => reset()}>NEW</Button>
        <Button disabled={disableSave || saving} onClick={submitData}>
          Save
        </Button>
      </Center>

      <GenerateRandomCard />
    </FlexC>
  );
};

export default Multiple;

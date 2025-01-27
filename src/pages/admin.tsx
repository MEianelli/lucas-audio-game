import { Button } from "@/components/buttons/buttons";
import { Center } from "@/components/containers/containers";
import { Input } from "@/components/inputs/input";
import { FlexC, FlexR } from "@/components/containers/flex";
import { PreviewLatest } from "@/components/custom/PreviewLatest";
import { Text } from "@/components/text/text";
import { TBuckets, uploadDataSupabase, uploadToGuesses } from "@/lib/supabase";
import { useMemo, useRef, useState } from "react";

const initialFiles = { audio: null, images: null };

const Admin = () => {
  const [files, setFiles] = useState(initialFiles);
  const [answers, setAnswers] = useState("");
  const [saving, setSaving] = useState(false);
  const audioRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const disableSave = useMemo(() => {
    return !(Object.values(files).length === 2 && !!answers);
  }, [files, answers]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setAnswers(e.target.value);
  }

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    type: TBuckets
  ) => {
    const file = event?.target?.files?.[0];
    if (!file) return;
    setFiles((old) => ({ ...old, [type]: file }));
  };

  async function submitData() {
    try {
      if (!files.audio || !files.images || !answers) {
        reset("Faltou algum arquivo, ou respostas, ARROMBADO!");
        return;
      }
      setSaving(true);
      const audio_src = await uploadDataSupabase(files.audio, "audio");
      const image_src = await uploadDataSupabase(files.images, "images");
      const data = {
        correct_answers: answers,
        audio_src,
        image_src,
      };
      await uploadToGuesses(data);
      reset("Novo Resgistro salvo com sucesso! PALHAÇO");
    } catch (error: unknown) {
      reset(`${error}`);
    }
  }

  function reset(error?: string) {
    if (error) alert(error);
    setAnswers("");
    setSaving(false);
    setFiles(initialFiles);
    if (audioRef.current) audioRef.current.value = "";
    if (imageRef.current) imageRef.current.value = "";
  }

  return (
    <>
      <FlexC
        css={{ border: "10px solid purple", padding: "40px", gap: "16px" }}
      >
        <Text
          color={"green"}
          size={"b"}
          weight={"700"}
          css={{ textAlign: "center", marginBottom: "20px" }}
        >
          ADMIN DASHBOARD
        </Text>
        <Center>
          <Text color={"text"}>Audio (só .mp3 até 5Mb)</Text>
          <Input
            type="file"
            onChange={(e) => handleFileUpload(e, "audio")}
            ref={audioRef}
          />
        </Center>
        <Center>
          <Text color={"text"}>Imagem (até 5Mb)</Text>
          <Input
            type="file"
            onChange={(e) => handleFileUpload(e, "images")}
            ref={imageRef}
          />
        </Center>
        <Center>
          <Text color={"text"}>Respostas certas (separadas for virgula):</Text>
          <Input type="text" value={answers} onChange={handleChange} />
        </Center>
        <Center>
          <Button onClick={() => reset()}>NEW</Button>
          <Button disabled={disableSave || saving} onClick={submitData}>
            Save
          </Button>
        </Center>
      </FlexC>
      <FlexR
        css={{
          border: "10px solid cyan",
          padding: "40px",
          gap: "16px",
          backgroundColor: "$black",
        }}
      >
        <PreviewLatest reload={saving} />
      </FlexR>
    </>
  );
};

export default Admin;

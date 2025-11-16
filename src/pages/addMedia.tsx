import { Button } from "@/components/buttons/buttons";
import { Center } from "@/components/containers/containers";
import { Input, Textarea } from "@/components/inputs/input";
import { FlexC } from "@/components/containers/flex";
import { Text } from "@/components/text/text";
import { useState } from "react";
import { commaStringToArr } from "@/utils/arrays";
import api from "@/utils/api";
import { Categories } from "@/types/types";
import { GetServerSideProps } from "next";

type Data = {
  title: string;
  wrongs: string;
  tags: string;
  cat: Categories;
};

const initialData: Data = {
  title: "",
  wrongs: "",
  tags: "",
  cat: "movie",
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const allowed = query.s === process.env.ADMIN_KEY;

  return {
    props: {
      allowed,
    },
  };
};

const AddMovie = ({ allowed }: { allowed: boolean }) => {
  const [data, setData] = useState<Data>(initialData);
  const [saving, setSaving] = useState(false);

  if (!allowed) return null;

  const disableSave = !(!!data.title && !!data.wrongs && !!data.tags);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    e.preventDefault();
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  async function submitData() {
    try {
      setSaving(true);
      const payload = {
        title: data.title.trim(),
        wrongs: commaStringToArr(data.wrongs),
        tags: commaStringToArr(data.tags),
        categorie: data.cat,
      };
      await api(`${process.env.NEXT_PUBLIC_APP_URL}/api/data/media`, {
        method: "POST",
        body: JSON.stringify({ data: payload }),
      });
      alert("Novo Resgistro salvo com sucesso!");
      setData(initialData);
    } catch (error: unknown) {
      alert(`${error}`);
    } finally {
      setSaving(false);
    }
  }

  return (
    <FlexC css={{ border: "10px solid purple", padding: "40px", gap: "16px" }}>
      <Text cp css={{ textAlign: "center", marginBottom: "20px" }}>
        Add media DASHBOARD
      </Text>
      <Center>
        <label htmlFor="mediaType">Select a Categorie:</label>
        <select id="mediaType" name="cat" value={data.cat} onChange={handleChange}>
          <option value="movie">Movie</option>
        </select>
      </Center>
      <Center>
        <Text cp>Respostas certa (nome do filme/musica):</Text>
        <Input type="text" name="title" value={data.title} onChange={handleChange} css={{ border: "1px solid $red" }} />
      </Center>
      <Center>
        <Text cp>Possiveis erradas (separadas for virgula):</Text>
        <Textarea
          name="wrongs"
          value={data.wrongs}
          onChange={handleChange}
          css={{ border: "1px solid $red", height: "100px", width: "400px" }}
        />
      </Center>
      <Center>
        <Text cp>Tags (separadas for virgula):</Text>
        <Input
          type="text"
          name="tags"
          value={data.tags}
          onChange={handleChange}
          css={{ border: "1px solid $purple" }}
        />
      </Center>
      <Center>
        <Button onClick={() => setData(initialData)}>NEW</Button>
        <Button disabled={disableSave || saving} onClick={submitData}>
          Save
        </Button>
      </Center>
    </FlexC>
  );
};

export default AddMovie;

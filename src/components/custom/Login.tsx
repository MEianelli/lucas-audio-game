import { useStore } from "@/lib/store";
import { FlexC } from "../containers/flex";
import { Input } from "../inputs/input";
import { Text } from "../text/text";
import { Button } from "../buttons/buttons";
import { addOneUser, getOneUser } from "@/lib/supabase";
import { crypto } from "@/utils/crypto";
import { useState } from "react";

const TIME_TO_CLOSE_MODAL = 1500; //ms

export const Login = ({ onLogin }: { onLogin?: () => void }) => {
  const name = useStore((store) => store.name);
  const password = useStore((store) => store.password);
  const setName = useStore((store) => store.setName);
  const setPassword = useStore((store) => store.setPassword);
  const [status, setStatus] = useState<"" | "logged" | "created">("");
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const type = e.target.name;
    const value = e.target.value;
    if (type === "name") setName(value);
    else setPassword(value);
  }

  async function handleCadastrar() {
    setLoading(true);
    try {
      const encryptedPass = crypto({ name, password });
      const data = await getOneUser({ field: "pass", value: encryptedPass });
      let added = false;
      if (!data?.length) {
        added = await addOneUser({ name, pass: encryptedPass });
      } else {
        setStatus("logged");
        setTimeout(() => onLogin?.(), TIME_TO_CLOSE_MODAL);
      }
      if (added) {
        setStatus("created");
        setTimeout(() => onLogin?.(), TIME_TO_CLOSE_MODAL);
      }
    } catch (error) {
      console.log(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <FlexC css={{ gap: 16 }}>
      <Text
        color={"text"}
        size={"b"}
<<<<<<< Updated upstream
=======
        css={{ marginBottom: 8, fontFamily: "$sans", fontSize: "27px", fontWeight: 700 }}
>>>>>>> Stashed changes
      >{`Cadastre-se para participar do ranking e ganhar prêmios:`}</Text>
      {status === "" && (
        <>
          <Input
            type="text"
            placeholder="Nome"
            value={name}
            name="name"
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Senha"
            value={password}
            name="password"
            onChange={handleChange}
          />
<<<<<<< Updated upstream
          <Button size={"full"} onClick={handleCadastrar} disabled={loading}>
=======
          <Button css={{ fontSize: "22px"}}
            variant={"login"}
            size={"full"}
            onClick={handleCadastrar}
            disabled={loading}
          >
>>>>>>> Stashed changes
            {loading ? "Processing..." : "Cadastrar / Entrar"}
          </Button>
        </>
      )}
      {status === "created" && <CreatedUser />}
      {status === "logged" && <LoggedUser />}
    </FlexC>
  );
};

export function CreatedUser() {
  return <Text color={"text"}>Usuario criado!!</Text>;
}

export function LoggedUser() {
  return <Text color={"text"}>Login com sucesso!!</Text>;
}

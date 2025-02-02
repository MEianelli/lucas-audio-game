import { useStore } from "@/lib/store";
import { FlexC } from "../../containers/flex";
import { LoginInput } from "../../inputs/input";
import { Text } from "../../text/text";
import { Button } from "../../buttons/buttons";
import { addOneUser, getOneUser } from "@/lib/supabase";
import { crypto } from "@/utils/crypto";
import { useEffect, useState } from "react";
import { TextMessage, Warning } from "./Messages";
import { getCryptoCookie, setCryptoCookie } from "@/utils/cookie";

const TIME_TO_CLOSE_MODAL = 3000; //ms

export type TStatus =
  | "unavailable"
  | "logged"
  | "created"
  | "unexistant"
  | "wrongPass"
  | "";

export const Login = ({ onLogin }: { onLogin?: () => void }) => {
  const name = useStore((store) => store.name);
  const password = useStore((store) => store.password);
  const setName = useStore((store) => store.setName);
  const setPassword = useStore((store) => store.setPassword);
  const [status, setStatus] = useState<TStatus>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cookie = getCryptoCookie();
    if (cookie?.name && cookie?.password) {
      setName(cookie?.name);
      setPassword(cookie?.password);
      setStatus("logged");
    }
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setStatus("");
    const type = e.target.name;
    const value = e.target.value;
    if (type === "name") setName(value);
    else setPassword(value);
  }

  async function handleCadastrar() {
    setLoading(true);
    try {
      const encryptedPass = crypto({ name, password });
      const data = await getOneUser({ field: "name", value: name });
      let added = false;
      if (!data?.length) {
        added = await addOneUser({ name, pass: encryptedPass });
      } else {
        setStatus("unavailable");
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

  async function handleLogin() {
    setLoading(true);
    try {
      const encryptedPass = crypto({ name, password });
      const data = await getOneUser({ field: "name", value: name });
      if (!data?.length) {
        setStatus("unexistant");
        return;
      }

      if (data[0].pass !== encryptedPass) {
        setStatus("wrongPass");
        return;
      }

      setCryptoCookie({ name, password });
      setStatus("logged");
      setTimeout(() => onLogin?.(), TIME_TO_CLOSE_MODAL);
      return;
    } catch (error) {
      console.log(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  }

  if (status === "logged") {
    return <TextMessage text={`Bem vindo de volta, ${name}`} />;
  }

  if (status === "created") {
    return <TextMessage text={`Obrigado por cadastrar, ${name}`} />;
  }

  return (
    <FlexC css={{ gap: 8 }}>
      <Text
        color={"text"}
        size={"b"}
        css={{ marginBottom: 8, fontFamily: "$sans", fontWeight: 700 }}
      >{`Cadastre-se para participar do ranking e ganhar prêmios:`}</Text>

      <LoginInput
        type="text"
        placeholder="Nome"
        value={name}
        name="name"
        onChange={handleChange}
      />
      {status === "unavailable" && <Warning text="Nome ja existe!" />}
      {status === "unexistant" && <Warning text="Nome não encontrado!" />}
      <LoginInput
        type="text"
        placeholder="Senha"
        value={password}
        name="password"
        onChange={handleChange}
      />
      {status === "wrongPass" && <Warning text="senha errada!" />}
      <Button
        variant={"cadastrar"}
        size={"full"}
        onClick={handleCadastrar}
        disabled={loading}
      >
        {loading ? "Processing..." : "Cadastrar"}
      </Button>
      <Text
        color={"text"}
        size={"m"}
        css={{ fontWeight: 700, marginTop: 12 }}
      >{`Ou se já tiver conta faça login:`}</Text>
      <Button
        variant={"login"}
        size={"full"}
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? "Processing..." : "Login"}
      </Button>
    </FlexC>
  );
};

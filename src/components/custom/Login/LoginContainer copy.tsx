import { useStore } from "@/lib/store";
import { FlexC } from "../../containers/flex";
import { addOneUser, getOneUser } from "@/lib/supabase";
import { crypto } from "@/utils/crypto";
import { useState } from "react";
import { setCryptoCookie } from "@/utils/cookie";
import { Login } from "./Login";
import { Cadastro } from "./Cadastro";
import { Button } from "@/components/buttons/buttons";
import { TStatus } from "@/types/types";

const allowedPattern = /^[A-Za-z0-9!@#$%^&]*$/;

export const LoginContainer = () => {
  const name = useStore((store) => store.name);
  const pass = useStore((store) => store.pass);
  const setName = useStore((store) => store.setName);
  const setPass = useStore((store) => store.setPass);
  const setLoadingDB = useStore((store) => store.setLoadingDB);
  const setScreen = useStore((store) => store.setScreen);
  const setModalOption = useStore((store) => store.setModalOption);

  const [status, setStatus] = useState<TStatus>("");
  const [display, setDisplay] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!allowedPattern.test(e.target.value)) {
      return;
    }
    e.preventDefault();
    setStatus("");
    const type = e.target.name;
    const value = e.target.value;
    if (type === "name") setName(value);
    else setPass(value);
  }

  async function handleCadastrar() {
    setLoading(true);
    if (!name || !pass) {
      setStatus("empty");
      setLoading(false);
      return;
    }
    try {
      const encryptedPass = crypto({ name, pass });
      const data = await getOneUser({ name });
      let added = false;
      if (!data?.id) {
        added = await addOneUser({ name, pass: encryptedPass });
      } else {
        setStatus("unavailable");
      }
      if (added) {
        setCryptoCookie({ name });
        setModalOption("registerResult");
        setScreen("content");
        setLoadingDB(false);
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
      const encryptedPass = crypto({ name, pass });
      const data = await getOneUser({ name });
      if (!data?.id) {
        setStatus("unexistant");
        return;
      }

      if (data.pass !== encryptedPass) {
        setStatus("wrongPass");
        return;
      }

      setCryptoCookie({ name });
      setModalOption("loginResult");
      setScreen("content");
      return;
    } catch (error) {
      console.log(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <FlexC css={{ gap: 8 }}>
      {display === "login" && (
        <Login
          name={name}
          pass={pass}
          handleChange={handleChange}
          handleLogin={handleLogin}
          status={status}
          loading={loading}
        >
          <Button
            variant={"link"}
            onClick={() => setDisplay("register")}
          >{`register`}</Button>
        </Login>
      )}
      {display === "register" && (
        <Cadastro
          name={name}
          pass={pass}
          handleChange={handleChange}
          handleCadastrar={handleCadastrar}
          status={status}
          loading={loading}
        >
          <Button
            variant={"link"}
            onClick={() => setDisplay("login")}
          >{`Have account? Login`}</Button>
        </Cadastro>
      )}
    </FlexC>
  );
};

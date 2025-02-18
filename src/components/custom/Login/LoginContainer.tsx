import { useStore } from "@/lib/store";
import { FlexC } from "../../containers/flex";
import { addOneUser, getOneUser } from "@/lib/supabase";
import { crypto } from "@/utils/crypto";
import { RefObject, useEffect, useState } from "react";
import { getCryptoCookie, setCryptoCookie } from "@/utils/cookie";
import { Login } from "./Login";
import { Cadastro } from "./Cadastro";
import { Button } from "@/components/buttons/buttons";
import { Text } from "@/components/text/text";

const TIME_TO_CLOSE_MODAL = 1111500; //ms

export type TStatus = "unavailable" | "unexistant" | "wrongPass" | "empty" | "";

export type TScreen = "login" | "cadastro" | "created" | "logged";

export interface LoginContainerProps {
  ref: RefObject<HTMLDialogElement | null>;
}

const allowedPattern = /^[A-Za-z0-9!@#$%^&]*$/;

export const LoginContainer = ({ ref }: LoginContainerProps) => {
  const name = useStore((store) => store.name);
  const pass = useStore((store) => store.pass);
  const setName = useStore((store) => store.setName);
  const setPass = useStore((store) => store.setPass);
  const setLoadingDB = useStore((store) => store.setLoadingDB);
  const updateUserFromDB = useStore((store) => store.updateUserFromDB);
  const [status, setStatus] = useState<TStatus>("");
  const [screen, setScreen] = useState<TScreen>("login");
  const [loading, setLoading] = useState(false);

  function onLogin() {
    ref?.current?.close();
  }

  useEffect(() => {
    const cookie = getCryptoCookie();
    if (!cookie?.name || !cookie?.pass) return;
    setName(cookie?.name);
    setPass(cookie?.pass);
    setScreen("logged");
    updateUserFromDB();
    setTimeout(onLogin, TIME_TO_CLOSE_MODAL);
  }, []);

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
      const data = await getOneUser({ field: "name", value: name });
      let added = false;
      if (!data?.length) {
        added = await addOneUser({ name, pass: encryptedPass });
      } else {
        setStatus("unavailable");
      }
      if (added) {
        setCryptoCookie({ name, pass });
        setScreen("created");
        setLoadingDB(false);
        setTimeout(onLogin, TIME_TO_CLOSE_MODAL);
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
      const data = await getOneUser({ field: "name", value: name });
      if (!data?.length) {
        setStatus("unexistant");
        return;
      }

      if (data[0].pass !== encryptedPass) {
        setStatus("wrongPass");
        return;
      }

      updateUserFromDB();
      setCryptoCookie({ name, pass });
      setScreen("logged");
      setTimeout(onLogin, TIME_TO_CLOSE_MODAL);
      return;
    } catch (error) {
      console.log(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <FlexC css={{ gap: 8 }}>
      {screen === "logged" && (
        <Text
          css={{ color: "$green", fontWeight: 700 }}
        >{`Welcome back ${name}`}</Text>
      )}
      {screen === "created" && (
        <Text css={{ color: "$green" }}>{"Register completed."}</Text>
      )}
      {screen === "login" && (
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
            onClick={() => setScreen("cadastro")}
          >{`register`}</Button>
        </Login>
      )}
      {screen === "cadastro" && (
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
            onClick={() => setScreen("login")}
          >{`Have account? Login`}</Button>
        </Cadastro>
      )}
    </FlexC>
  );
};

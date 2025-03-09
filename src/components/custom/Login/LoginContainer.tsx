import { useStore } from "@/lib/store";
import { FlexC } from "../../containers/flex";
import { crypto } from "@/utils/crypto";
import { useState } from "react";
import { Login } from "./Login";
import { Cadastro } from "./Cadastro";
import { Button } from "@/components/buttons/buttons";
import { Response, TStatus } from "@/types/types";
import api from "@/utils/api";

const allowedPattern = /^[A-Za-z0-9!@#$%^&]*$/;

export const LoginContainer = () => {
  const name = useStore((store) => store.name);
  const pass = useStore((store) => store.pass);
  const setName = useStore((store) => store.setName);
  const setPass = useStore((store) => store.setPass);
  const updateUserData = useStore((store) => store.updateUserData);

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
    try {
      const encryptedPass = crypto({ name, pass });
      const data: Response = await api("http://localhost:3000/api/register", {
        method: "POST",
        body: JSON.stringify({ name, pass: encryptedPass }),
      });

      setStatus(data.res);
      if (data.res === "registered") {
        updateUserData(data.user, "register");
      }
      return;
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
      const data: Response = await api("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify({ name, pass: encryptedPass }),
      });

      setStatus(data.res);
      if (data.res === "logged") {
        updateUserData(data.user, "login");
      }
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

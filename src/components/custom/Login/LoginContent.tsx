import { useStore } from "@/lib/store";
import { crypto } from "@/utils/crypto";
import { useState } from "react";
import { Login } from "./Login";
import { Response, TStatus } from "@/types/types";
import api from "@/utils/api";
import { LoginResult, RegisterResult } from "./LoginResult";

const allowedPattern = /^[A-Za-z0-9!@#$%^&]*$/;

export const LoginContent = () => {
  const name = useStore((s) => s.name);
  const pass = useStore((s) => s.pass);
  const setName = useStore((s) => s.setName);
  const setPass = useStore((s) => s.setPass);
  const updateUserData = useStore((s) => s.updateUserData);
  const loginState = useStore((s) => s.loginState);
  const setLoginState = useStore((s) => s.setLoginState);
  const [status, setStatus] = useState<TStatus>("");
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
      const data: Response = await api(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/register`,
        {
          method: "POST",
          body: JSON.stringify({ name, pass: encryptedPass }),
        }
      );

      setStatus(data.res);
      if (data.res === "registered") {
        updateUserData(data.user);
        setLoginState("registered");
      }
      return;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin() {
    setLoading(true);
    try {
      const encryptedPass = crypto({ name, pass });
      const data: Response = await api(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/login`,
        {
          method: "POST",
          body: JSON.stringify({ name, pass: encryptedPass }),
        }
      );

      setStatus(data.res);
      if (data.res === "logged") {
        updateUserData(data.user);
        setLoginState("logged");
      }
      return;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loginState === "logged" && <LoginResult />}
      {loginState === "registered" && <RegisterResult />}
      {(loginState === "login" || loginState === "register") && (
        <Login
          name={name}
          pass={pass}
          handleChange={handleChange}
          handleLogin={handleLogin}
          handleCadastrar={handleCadastrar}
          status={status}
          loading={loading}
        />
      )}
    </>
  );
};

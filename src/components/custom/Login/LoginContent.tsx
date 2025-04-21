import { useStore } from "@/lib/store";
import { crypto } from "@/utils/crypto";
import { useState } from "react";
import { Login } from "./Login";
import { RankData, Response, TStatus } from "@/types/types";
import api from "@/utils/api";
import { LoginResult } from "./LoginResult";
import { useShallow } from "zustand/shallow";

const allowedPattern = /^[A-Za-z0-9!@#$%^&]*$/;

export const LoginContent = () => {
  const [
    name,
    pass,
    setName,
    setPass,
    updateUserData,
    loginState,
    setLoginState,
    updateRankData,
  ] = useStore(
    useShallow((s) => [
      s.name,
      s.pass,
      s.setName,
      s.setPass,
      s.updateUserData,
      s.loginState,
      s.setLoginState,
      s.updateRankData,
    ])
  );

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
    if (!name || !pass) {
      setStatus("empty");
      return;
    }
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
        const rankData: { data: RankData } = await api(
          `${process.env.NEXT_PUBLIC_APP_URL}/api/rank`,
          {
            method: "POST",
            body: JSON.stringify({ id: data.user.id }),
          }
        );
        updateRankData(rankData.data);
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
    if (!name || !pass) {
      setStatus("empty");
      return;
    }
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
        const rankData: { data: RankData } = await api(
          `${process.env.NEXT_PUBLIC_APP_URL}/api/rank`,
          {
            method: "POST",
            body: JSON.stringify({ id: data.user.id }),
          }
        );
        updateRankData(rankData.data);
        updateUserData(data.user);
        setLoginState("logged");
        setTimeout(() => window.location.search = "", 100);
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
      {loginState === "registered" && <LoginResult />}
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

import { LoginInput } from "../../inputs/input";
import { Text } from "../../text/text";
import { Button } from "../../buttons/buttons";
import { TStatus } from "./LoginContainer";
import { Warning } from "./Messages";
import { JSX } from "react";

export interface LoginProps {
  name: string;
  pass: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
  status: TStatus;
  loading: boolean;
  children: JSX.Element | JSX.Element[];
}

export const Login = ({
  name,
  pass,
  loading,
  handleChange,
  handleLogin,
  status,
  children,
}: LoginProps) => {
  return (
    <>
      <Text
        color={"text"}
        size={"b"}
        css={{ marginBottom: 8, fontFamily: "$sans", fontWeight: 700 }}
      >{`Faça login para participar do ranking:`}</Text>

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
        value={pass}
        name="pass"
        onChange={handleChange}
      />
      {status === "wrongPass" && <Warning text="senha errada!" />}
      <Button
        variant={"login"}
        size={"full"}
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? "Processing..." : "Login"}
      </Button>
      {children}
    </>
  );
};

import { LoginInput } from "@/components/inputs/input";
import { Text } from "@/components/text/text";
import { Button } from "@/components/buttons/buttons";
import { Warning } from "./Messages";
import { JSX } from "react";
import { TStatus } from "@/types/types";

export interface CadastroProps {
  name: string;
  pass: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCadastrar: () => void;
  status: TStatus;
  loading: boolean;
  children: JSX.Element | JSX.Element[];
}

export const Cadastro = ({ name, pass, loading, handleChange, handleCadastrar, status, children }: CadastroProps) => {
  return (
    <>
      <Text
        color={"text"}
        css={{
          marginBottom: 8,
          fontFamily: "$sans",
          fontWeight: 700,
          maxWidth: "90%",
          color: "$purple",
        }}
      >{`Register to show on rank and win rewards!`}</Text>

      <LoginInput type="text" placeholder="Name" value={name} name="name" autoComplete="off" onChange={handleChange} />
      {status === "unavailable" && <Warning text="Name already taken!" />}
      <LoginInput type="text" placeholder="Senha" value={pass} name="pass" autoComplete="off" onChange={handleChange} />
      {status === "empty" && <Warning text="Name and Password cant be empty!" />}
      <Button variant={"cadastrar"} size={"full"} onClick={handleCadastrar} disabled={loading}>
        {loading ? "Processing..." : "Register"}
      </Button>
      {children}
    </>
  );
};

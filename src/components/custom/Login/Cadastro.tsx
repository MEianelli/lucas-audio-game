import { LoginInput } from "../../inputs/input";
import { Text } from "../../text/text";
import { Button } from "../../buttons/buttons";
import { Warning } from "./Messages";
import { TStatus } from "./LoginContainer";
import { JSX } from "react";

export interface CadastroProps {
  name: string;
  pass: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCadastrar: () => void;
  status: TStatus;
  loading: boolean;
  children: JSX.Element | JSX.Element[];
}

export const Cadastro = ({
  name,
  pass,
  loading,
  handleChange,
  handleCadastrar,
  status,
  children,
}: CadastroProps) => {
  return (
    <>
      <Text
        color={"text"}
        size={"b"}
        css={{
          marginBottom: 8,
          fontFamily: "$sans",
          fontWeight: 700,
          maxWidth: "90%",
          color: "$green",
        }}
      >{`Register to show on rank and win rewards!`}</Text>

      <LoginInput
        type="text"
        placeholder="Name"
        value={name}
        name="name"
        onChange={handleChange}
      />
      {status === "unavailable" && <Warning text="Name already taken!" />}
      <LoginInput
        type="text"
        placeholder="Senha"
        value={pass}
        name="pass"
        onChange={handleChange}
      />
      {status === "empty" && (
        <Warning text="Name and Password cant be empty!" />
      )}
      <Button
        variant={"cadastrar"}
        size={"full"}
        onClick={handleCadastrar}
        disabled={loading}
      >
        {loading ? "Processing..." : "Register"}
      </Button>
      {children}
    </>
  );
};

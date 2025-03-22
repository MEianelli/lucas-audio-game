import { LoginInput } from "../../inputs/input";
import { Button } from "../../buttons/buttons";
import { Warning } from "./Messages";
import { TStatus } from "@/types/types";
import { FlexC, FlexR } from "@/components/containers/flex";
import { Text } from "@/components/text/text";

export interface LoginProps {
  name: string;
  pass: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
  handleCadastrar: () => void;
  status: TStatus;
  loading: boolean;
}

export const Login = ({
  name,
  pass,
  loading,
  handleChange,
  handleLogin,
  handleCadastrar,
  status,
}: LoginProps) => {
  return (
    <FlexC
      css={{
        gap: "10px",
      }}
    >
      <Text
        css={{
          fontSize: "28px",
          color: "$purple",
          fontWeight: 700,
          marginBottom: "16px",
        }}
      >
        Register / Login
      </Text>
      <LoginInput
        type="text"
        placeholder="Nickname"
        value={name}
        name="name"
        autoComplete="off"
        autoCapitalize="off"
        onChange={handleChange}
      />
      {status === "unexistant" && <Warning text="No user with that name!" />}
      {status === "unavailable" && <Warning text="Name already taken!" />}
      <LoginInput
        type="text"
        placeholder="Password"
        value={pass}
        name="pass"
        autoComplete="off"
        autoCapitalize="off"
        onChange={handleChange}
      />
      {status === "empty" && (
        <Warning text="Name and Password cant be empty!" />
      )}
      {status === "wrongPass" && <Warning text="wrong password!" />}
      <FlexR css={{ gap: 10 }}>
        <Button
          variant={"cadastrar"}
          size={"full"}
          onClick={handleCadastrar}
          disabled={loading}
        >
          {loading ? "Loading" : "Register"}
        </Button>
        <Button
          variant={"login"}
          size={"full"}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Loading" : "Login"}
        </Button>
      </FlexR>
    </FlexC>
  );
};

import { LoginInputCrt } from "@/components/inputs/input";
import { Button } from "@/components/buttons/buttons";
import { Warning } from "./Messages";
import { TStatus } from "@/types/types";
import { FlexC, FlexR } from "@/components/containers/flex";

export interface LoginProps {
  name: string;
  pass: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
  handleCadastrar: () => void;
  status: TStatus;
  loading: boolean;
}

export const Login = ({ name, pass, loading, handleChange, handleLogin, handleCadastrar, status }: LoginProps) => {
  return (
    <FlexC
      css={{
        gap: "10px",
      }}
    >
      <LoginInputCrt
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
      <LoginInputCrt
        type="text"
        placeholder="Password"
        value={pass}
        name="pass"
        autoComplete="off"
        autoCapitalize="off"
        onChange={handleChange}
      />
      {status === "empty" && <Warning text="Name and Password cant be empty!" />}
      {status === "wrongPass" && <Warning text="wrong password!" />}
      <FlexR css={{ gap: 10 }}>
        <Button variant={"cadastrar"} size={"full"} onClick={handleCadastrar} disabled={loading}>
          {loading ? "Loading" : "Register"}
        </Button>
        <Button variant={"login"} size={"full"} onClick={handleLogin} disabled={loading}>
          {loading ? "Loading" : "Login"}
        </Button>
      </FlexR>
    </FlexC>
  );
};

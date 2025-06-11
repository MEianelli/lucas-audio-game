import { LoginInputCrt } from "@/components/inputs/input";
import { Button } from "@/components/buttons/buttons";
import { Warning } from "./Messages";
import { TStatus } from "@/types/types";
import { FlexC, FlexR } from "@/components/containers/flex";
import { BlurButton } from "@/components/buttons/BlurButton";

export interface LoginProps {
  name: string;
  pass: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
  handleCadastrar: () => void;
  onfocus: () => void;
  status: TStatus;
  loading: boolean;
}

export const Login = ({
  name,
  pass,
  loading,
  handleChange,
  handleLogin,
  onfocus,
  handleCadastrar,
  status,
}: LoginProps) => {
  return (
    <FlexC
      css={{
        gap: "10px",
        width: "100%",
        position: "relative",
      }}
    >
      <LoginInputCrt
        type="text"
        placeholder="Nickname"
        value={name}
        name="name"
        autoComplete="off"
        autoCapitalize="off"
        maxLength={20}
        onChange={handleChange}
        onFocus={onfocus}
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
        maxLength={20}
        onChange={handleChange}
        onFocus={onfocus}
      />
      {status === "empty" && <Warning text="Name and Password cant be empty!" />}
      {status === "wrongPass" && <Warning text="wrong password!" />}
      <FlexR css={{ gap: 10 }}>
        <BlurButton
          title={loading ? "Loading" : "Register"}
          onclick={handleCadastrar}
          disabled={loading}
          color="#2c08b7"
        />
        <BlurButton title={loading ? "Loading" : "Login"} onclick={handleLogin} disabled={loading} />
      </FlexR>
    </FlexC>
  );
};

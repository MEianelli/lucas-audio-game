import { LoginInputCrt } from "@/components/inputs/input";
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
      {status === "tooManyRequests" && <Warning text="Too many Attempts" />}
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
        {!loading ? (
          <>
            <BlurButton
              title={"Register"}
              onclick={handleCadastrar}
              disabled={status === "tooManyRequests"}
              color="#2c08b7"
            />
            <BlurButton title={"Login"} onclick={handleLogin} disabled={loading} />
          </>
        ) : (
          <BlurButton disabled={true} title="Loading" onclick={() => {}} color="#48435e" />
        )}
      </FlexR>
    </FlexC>
  );
};

import { LoginInput } from "../../inputs/input";
import { Text } from "../../text/text";
import { Button } from "../../buttons/buttons";
import { Warning } from "./Messages";
import { JSX } from "react";
import { TStatus } from "@/types/types";

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
        css={{
          marginBottom: 8,
          fontFamily: "$sans",
          fontWeight: 700,
          color: "$green",
          maxWidth: "90%",
        }}
      >{`Login to score points and show up on rank`}</Text>

      <LoginInput
        type="text"
        placeholder="Name"
        value={name}
        name="name"
        onChange={handleChange}
      />
      {status === "unexistant" && <Warning text="No user with that name!" />}
      <LoginInput
        type="text"
        placeholder="Password"
        value={pass}
        name="pass"
        onChange={handleChange}
      />
      {status === "wrongPass" && <Warning text="wrong password!" />}
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

import { LoginInput } from "../../inputs/input";
import { Text } from "../../text/text";
import { Button } from "../../buttons/buttons";
import { Warning } from "./Messages";
import { TStatus } from "./LoginContainer";

export interface CadastroProps {
  name: string;
  pass: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCadastrar: () => void;

  status: TStatus;
  loading: boolean;
}

export const Cadastro = ({
  name,
  pass,
  loading,
  handleChange,
  handleCadastrar,
  status,
}: CadastroProps) => {
  return (
    <>
      <Text
        color={"text"}
        size={"b"}
        css={{ marginBottom: 8, fontFamily: "$sans", fontWeight: 700 }}
      >{`Cadastre-se para participar do ranking e ganhar prêmios:`}</Text>

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
      {status === "empty" && (
        <Warning text="Nome e senha não podem estar vazios" />
      )}
      <Button
        variant={"cadastrar"}
        size={"full"}
        onClick={handleCadastrar}
        disabled={loading}
      >
        {loading ? "Processing..." : "Cadastrar"}
      </Button>
    </>
  );
};

import { Text } from "@/components/text/text";
import { useStore } from "@/lib/store";

export const LoginResult = () => {
  const name = useStore((store) => store.name);
  return (
    <Text css={{ color: "$purple", fontWeight: 700 }}>
      {`Welcome back ${name}`}
    </Text>
  );
};

export const RegisterResult = () => {
  return (
    <Text css={{ color: "$purple", fontWeight: 700 }}>
      {"Register completed."}
    </Text>
  );
};

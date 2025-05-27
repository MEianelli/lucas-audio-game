import { BlurText } from "@/components/text/BlurText";
import useTimeUntilTomorrow from "@/lib/hooks/tomorrow";

export function Timer() {
  const timer = useTimeUntilTomorrow();

  return <BlurText title={`More lifes in: ${timer}`} />;
}

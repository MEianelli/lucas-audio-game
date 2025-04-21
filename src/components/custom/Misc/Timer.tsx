import { Text } from "@/components/text/text";
import useTimeUntilTomorrow from "@/lib/hooks/tomorrow";

export function Timer() {
    const timer = useTimeUntilTomorrow();

    return (
        <Text s>{`More lifes in: ${timer}`}</Text>
    )
}
import { useEffect, useState } from "react";

const useTimeUntilTomorrow = (): string => {
  const [timeRemaining, setTimeRemaining] = useState<string>("");

  useEffect(() => {
    const calculateTimeUntilTomorrow = (): void => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1); // Set to tomorrow
      tomorrow.setHours(0, 0, 0, 0); // Reset to midnight

      const differenceInMilliseconds: number =
        tomorrow.getTime() - now.getTime();

      const hours: number = Math.floor(
        differenceInMilliseconds / (1000 * 60 * 60)
      );
      const minutes: number = Math.floor(
        (differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds: number = Math.floor(
        (differenceInMilliseconds % (1000 * 60)) / 1000
      );

      // Format time to always show two digits
      const formattedHours: string = String(hours).padStart(2, "0");
      const formattedMinutes: string = String(minutes).padStart(2, "0");
      const formattedSeconds: string = String(seconds).padStart(2, "0");

      setTimeRemaining(
        `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
      );
    };

    // Calculate immediately
    calculateTimeUntilTomorrow();

    // Update every second
    const intervalId: NodeJS.Timeout = setInterval(
      calculateTimeUntilTomorrow,
      1000
    );

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return timeRemaining;
};

export default useTimeUntilTomorrow;

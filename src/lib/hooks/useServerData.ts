import { useEffect, useState } from "react";
import { useStore } from "../store";
import { PageProps } from "../context/getServerSideProps";

export function useServerData(props: PageProps) {
  const [loading, setLoading] = useState(true);
  const updateUserData = useStore((s) => s.updateUserData);
  const updateRankData = useStore((s) => s.updateRankData);
  const setLoginState = useStore((s) => s.setLoginState);
  const resetStore = useStore((s) => s.resetStore);

  useEffect(() => {
    updateRankData(props?.rank);
    if (!props.user?.id) {
      resetStore();
      return;
    }
    updateUserData(props.user);
    setLoginState("logged");
    //eslint-disable-next-line
    setLoading(false);
  }, []);

  return { loading };
}

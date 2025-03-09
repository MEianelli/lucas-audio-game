import { useStore } from "@/lib/store";

const Content = () => {
  const store = useStore((store) => store);
  console.log("store :", store);
  return <div>AAAAAAAAAAAAAAAAAAAA</div>;
};

export default Content;

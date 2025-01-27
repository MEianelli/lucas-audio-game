import { Div } from "@/components/containers/div";
import { storageBaseUrl, supabase } from "@/lib/supabase";
import Image from "next/image";

const Tests = () => {
  function handleClick() {
    const { data } = supabase.storage
      .from("images")
      .getPublicUrl("public/bit.jpg");
    console.log(data);
  }

  return (
    <Div css={{ width: 400, height: 400, border: "1px solid red" }}>
      <Image
        src={`${storageBaseUrl}/images/public/bit.jpg`}
        width={200}
        height={200}
        alt="testing"
      />
      <button onClick={handleClick}>CLICK</button>
    </Div>
  );
};

export default Tests;

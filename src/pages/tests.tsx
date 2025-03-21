import { Div } from "@/components/containers/div";

const Tests = () => {
  return (
    <Div
      css={{
        background: "$black",
        width: "900px",
        height: "900px",
        alignContent: "center",
      }}
    >
      <Div
        css={{
          background: "$white",
          width: "90px",
          height: "90px",
          margin: "0 auto",
        }}
      >
        <svg width="10px" height="10px">
          <circle fill="#0000ff" cx="10" cy="10" r="10" />
        </svg>
        <Div>AAAA</Div>
      </Div>
      <Div
        css={{
          background: "$purple",
          width: "150px",
          height: "150px",
          margin: "0 auto",
        }}
      >
        <svg viewBox="0 0 10 10" width="10px" height="10px">
          <path d="M 5 10 A 1 1 0 0 0 5 0 A 1 1 0 0 0 5 10" fill="#ff0000" />
        </svg>
        <svg viewBox="0 0 10 10" width="20px" height="20px">
          <path d="M 5 10 A 1 1 0 0 0 5 0 A 1 1 0 0 0 5 10" fill="#ff0000" />
        </svg>
        <svg viewBox="0 0 10 10" width="40px" height="40px">
          <path d="M 5 10 A 1 1 0 0 0 5 0 A 1 1 0 0 0 5 10" fill="#ff0000" />
        </svg>
      </Div>
    </Div>
  );
};

export default Tests;

/*
  const { data, error } = await supabase.rpc("get_random_cards", {
    num_cards: 10,
    category_filter: "movie",
  });

  
  */

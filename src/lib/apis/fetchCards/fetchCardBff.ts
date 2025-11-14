export const fetchCardBff = async (id: number) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/data/fetch-card?id=${id}`, {
      method: "GET",
    });

    if (!response.ok) {
      console.log("Network response was not ok");
      return [];
    }

    return await response.json();
  } catch (error) {
    console.log("Error fetching cards:", error);
    return [];
  }
};

export const missIdsToObj = (missids: string[]) => {
  return missids.map((miss) => {
    const [id, index] = miss.split(",").map(Number);
    return { id, index };
  });
};

export const missIdsToids = (missids: string[]) => {
  return missIdsToObj(missids).map(({ id }) => Number(id));
};

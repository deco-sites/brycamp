export interface Votes {
  total: number;
}

const loader = async (): Promise<Votes> => {
  const res = await fetch("https://camp-api.deco.cx/events", {
    method: "GET",
    headers: {
      "x-api-key": "brycamp",
    },
  });
  const data = await res.json() as Votes;
  return data;
};

export default loader;

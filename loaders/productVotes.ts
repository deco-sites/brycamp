export interface Props {
  productId: string;
}

export interface Result {
  product: string;
}

const loader = async (
  { productId }: Props,
  _req: Request,
  _ctx: unknown,
): Promise<Result> => {
  const res = await fetch(`https://camp-api.deco.cx/event/${productId}`, {
    method: "GET",
    headers: {
      "x-api-key": "brycamp",
    },
  });
  const data = await res.json() as Result;
  return data;
};

export default loader;

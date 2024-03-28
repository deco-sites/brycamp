import { AppContext } from "../apps/site.ts";

export interface Props {
  productId: string;
}

export interface Result {
  status: "ok" | "failure";
}

const action = async (
  props: Props,
  _req: Request,
  _ctx: AppContext,
): Promise<Result> => {
  const res = await fetch("https://camp-api.deco.cx/event", {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "x-api-key": "brycamp",
    },
  });

  if (res.ok) {
    return { status: "ok" };
  }

  return { status: "failure" };
};

export default action;

import { MatchContext } from "deco/blocks/matcher.ts";

export interface Props {
  campaign: string;
}

export default function UtmCampaign(
  { campaign = "" }: Props,
  ctx: MatchContext,
) {
  const url = new URL(ctx.request.url);
  const params = new URLSearchParams(url.search ?? "");
  const isValid = params.get("utmCampaign")?.includes(campaign) ?? false;

  return isValid;
}

import { AppContext } from "deco-sites/brycamp/apps/site.ts";

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string | null;
  hireable: string | null;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  message?: string;
}

const loader = async (
  _props: null,
  req: Request,
  ctx: AppContext,
): Promise<User> => {
  const url = new URL(req.url);
  const userId = url.searchParams.get("userId") ?? "bryamatsgit";

  const res = await fetch(`https://api.github.com/users/${userId}`);
  const data = await res.json();

  if (data?.message === "Not Found") {
    ctx.response.status = 404;
  }

  return data;
};

export default loader;

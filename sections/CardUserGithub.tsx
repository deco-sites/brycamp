import { User } from "../loaders/userGithub.ts";

export interface Props {
  user: User;
}

function CardUserGithub({ user }: Props) {
  const {
    avatar_url,
    html_url,
    name,
    bio,
    message,
  } = user;

  const isNotFound = message && message === "Not Found";

  return (
    <div className="container px-2">
      <div className="flex items-center justify-center">
        {isNotFound
          ? <h1 className="text-4xl">User Not Found</h1>
          : (
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={avatar_url}
                  alt={name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{bio}</p>
                <div className="card-actions justify-end">
                  <a href={html_url} className="btn btn-primary">View User</a>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default CardUserGithub;

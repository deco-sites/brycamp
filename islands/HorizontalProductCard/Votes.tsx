import Icon from "../../components/ui/Icon.tsx";
import { useState } from "preact/hooks";
import { invoke } from "deco-sites/brycamp/runtime.ts";

function Favorites() {
  const [isVote, setIsVote] = useState<boolean>(false);
  const [votes, setVotes] = useState<number>(0);

  return (
    <button
      onClick={async () => {
        setIsVote((is) => !is);
        setVotes((n) => !isVote ? n + 1 : n - 1);
        await invoke["deco-sites/brycamp"].actions.postVote({
          productId: "361",
        });
      }}
    >
      {isVote
        ? <Icon id="MoodCheck" size={48} />
        : <Icon id="MoodSmile" size={48} />}
      {votes}
    </button>
  );
}

export default Favorites;

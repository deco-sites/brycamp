import Icon from "../../components/ui/Icon.tsx";
import { useState } from "preact/hooks";

function Favorites() {
  const [isVote, setIsVote] = useState<boolean>(false);
  const [votes, setVotes] = useState<number>(0);

  return (
    <button
      onClick={() => {
        setIsVote((is) => !is);
        setVotes((n) => !isVote ? n + 1 : n - 1);
      }}
    >
      {isVote ? (
        <Icon id="MoodCheck" size={48} />
      ) : (
        <Icon id="MoodSmile" size={48} />
      )}
      {votes}
    </button>
  );
}

export default Favorites;

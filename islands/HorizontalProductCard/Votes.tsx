import Icon from "../../components/ui/Icon.tsx";
import { useState } from "preact/hooks";
import { invoke } from "deco-sites/brycamp/runtime.ts";

function Votes() {
  const [votes, setVotes] = useState<string>("0");
  const [isVote, setIsVote] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(true);

  if (isUpdate) {
    invoke["deco-sites/brycamp"].loaders.productVotes({
      productId: "361",
    }).then(({ product }) => {
      setVotes(() => product);
      setIsVote(() => true);
      setIsUpdate(() => false);
    });
  }

  return (
    <button
      disabled={isVote}
      onClick={async () => {
        await invoke["deco-sites/brycamp"].actions.postVote({
          productId: "361",
        });

        setIsUpdate(() => true);
      }}
    >
      {isVote
        ? <Icon id="MoodCheck" size={48} />
        : <Icon id="MoodSmile" size={48} />}
      {votes}
    </button>
  );
}

export default Votes;

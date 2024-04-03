import Icon from "../../components/ui/Icon.tsx";
import { useState } from "preact/hooks";
import { invoke } from "deco-sites/brycamp/runtime.ts";

interface Props {
  productId: string;
}

function Votes({ productId }: Props) {
  const [votes, setVotes] = useState<string>("0");
  const [isVote, setIsVote] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(true);

  function handleUpdate() {
    if (isUpdate) {
      invoke["deco-sites/brycamp"].loaders.productVotes({
        productId,
      }).then(({ product }) => {
        setVotes(() => product);
        if (Number(product) > 0) {
          setIsVote(() => true);
          setIsUpdate(() => false);
        }
      });
    }
  }

  handleUpdate();

  return (
    <button
      disabled={isVote}
      onClick={async () => {
        await invoke["deco-sites/brycamp"].actions.postVote({
          productId,
        });

        handleUpdate();
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

import Icon from "../../components/ui/Icon.tsx";
import { useState } from "preact/hooks";
import { invoke } from "deco-sites/brycamp/runtime.ts";
import { toast } from "toastify";

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
        }).then(({ total }) => {
          const totalVotesEl = document.querySelectorAll(".total-votes");

          if (totalVotesEl && totalVotesEl.length) {
            totalVotesEl.forEach((el) => {
              el.textContent = String(total);
            });
          }
        });

        handleUpdate();

        toast<string>("😊 Obrigado por votar!");
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

import Icon from "deco-sites/brycamp/components/ui/Icon.tsx";
import { useEffect, useState } from "preact/hooks";
import { invoke } from "deco-sites/brycamp/runtime.ts";

interface Props {
  totalVotes: number;
}

export default function VotesButton({ totalVotes }: Props) {
  const [votes, setVotes] = useState<number>(totalVotes);

  const updateVotes = async () => {
    const { total } = await invoke["deco-sites/brycamp"].loaders.votes();
    setVotes(() => total);
  };

  useEffect(() => {
    const intervalId = setInterval(updateVotes, 30000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      class="flex items-center text-xs font-thin"
      aria-label="Total de Votos"
    >
      <div class="flex btn btn-circle btn-sm btn-ghost gap-1">
        <Icon id="Friends" size={20} strokeWidth={0.4} />
      </div>
      <span class="total-votes">{votes}</span>
    </div>
  );
}

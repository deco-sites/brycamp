/**
 * @titleBy code
 */
export interface CupomTemplate {
  /**
   * @default GANHE30
   */
  code: string;
  /**
   * @default Ganhe 30% OFF usando o código GANHE30 em produtos de culinária cultural
   */
  description: string;
}

export interface Props {
  /**
   * @default Cupons
   */
  title?: string;
  cupons: CupomTemplate[];
}

function CupomItem(
  {
    code,
    description,
  }: CupomTemplate,
) {
  return (
    <li
      className="max-w-sm rounded overflow-hidden px-6 py-4 border border-dashed"
      id={code}
      data-cupom-id={code}
    >
      <p className="font-bold text-xl mb-2">{code}</p>
      <p className="text-gray-700 text-base">{description}</p>
    </li>
  );
}

function Cupom({ cupons, title }: Props) {
  if (!cupons || cupons.length < 1) {
    return <></>;
  }

  return (
    <div className="container px-2">
      {title && (
        <h2 className="font-bold text-5xl leading-normal mb-5">{title}</h2>
      )}
      <ul className="flex items-center gap-3">
        {cupons.map(({ code, description }) => (
          <CupomItem
            key={code}
            code={code}
            description={description}
          />
        ))}
      </ul>
    </div>
  );
}

export default Cupom;

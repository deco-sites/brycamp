export interface Cep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export interface Props {
  cep: string;
}

export default async function loader(props: Props): Promise<Cep> {
  console.log({ props });

  const res = await fetch("https://viacep.com.br/ws/" + props.cep + "/json/");
  const data = await res.json() as Cep;

  return data;
}

import { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
  temperature?: Temperature | null;
}

function Weather({ temperature }: Props) {
  return <p>Está fazendo {temperature?.celsius} graus celsius</p>;
}

export default Weather;

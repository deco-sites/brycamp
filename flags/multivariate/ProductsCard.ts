export { onBeforeResolveProps } from "apps/website/utils/multivariate.ts";
import { MultivariateFlag } from "deco/blocks/flag.ts";
import multivariate, {
  MultivariateProps,
} from "apps/website/utils/multivariate.ts";
import { Product } from "apps/commerce/types.ts";

export type Products = Product[] | null;

/**
 * @title Products Card Variants
 */
export default function ProductsCard(
  props: MultivariateProps<Products>,
): MultivariateFlag<Products> {
  return multivariate(props);
}

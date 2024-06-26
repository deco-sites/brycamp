import { Product } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import { useOffer } from "../sdk/useOffer.ts";
import { formatPrice } from "../sdk/format.ts";
import { AppContext } from "deco-sites/brycamp/apps/site.ts";
import Votes from "../islands/HorizontalProductCard/Votes.tsx";
import { type Products } from "../flags/multivariate/ProductsCard.ts";

type WidthSize =
  | "max-w-xl"
  | "max-w-2xl"
  | "max-w-3xl"
  | "max-w-4xl"
  | "max-w-5xl"
  | "max-w-6xl"
  | "max-w-7xl"
  | "max-w-full";

export interface Props {
  /** @title Integration */
  products: Products;
  forceErrorFallback?: boolean;
  animateImage?: boolean;
  widthSize?: WidthSize;
}

const specificationsIgnore = ["RefId", "cluster"];

export function ErrorFallback() {
  return (
    <HorizontalProductCard
      products={[{
        "@type": "Product",
        productID: "333",
        sku: "333",
        name: "Error Fallback",
        image: [
          {
            "@type": "ImageObject",
            alternateName: "Texto Alternativo Para a Imagem",
            url: "https://placehold.co/210",
            name: "Texto Alternativo Para a Imagem",
            encodingFormat: "image",
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius est non mi consequat, ac gravida elit tempor. Proin faucibus, leo id consectetur dapibus, diam odio sollicitudin ex, quis rhoncus orci ex ut ante. Nullam gravida justo in sagittis malesuada. Suspendisse lacinia viverra justo, eu ultricies odio tempus eu.",
        url: "#",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "BRL",
          highPrice: 90,
          lowPrice: 90,
          offerCount: 1,
          offers: [
            {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              price: 90,
              inventoryLevel: {
                value: 1000,
              },
              priceSpecification: [
                {
                  "@type": "UnitPriceSpecification",
                  priceType: "https://schema.org/ListPrice",
                  price: 120,
                },
              ],
            },
          ],
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            "name": "category",
            "value": "Categoria",
            "valueReference": "SPECIFICATION",
          },
          {
            "@type": "PropertyValue",
            "name": "category",
            "value": "Categoria",
            "valueReference": "SPECIFICATION",
          },
          {
            "@type": "PropertyValue",
            "name": "category",
            "value": "Categoria",
            "valueReference": "SPECIFICATION",
          },
        ],
      }]}
      forceErrorFallback={false}
    />
  );
}

export function LoadingFallback() {
  return (
    <HorizontalProductCard
      products={[{
        "@type": "Product",
        productID: "333",
        sku: "333",
        name: "Loading...",
        image: [
          {
            "@type": "ImageObject",
            alternateName: "Texto Alternativo Para a Imagem",
            url: "https://placehold.co/210",
            name: "Texto Alternativo Para a Imagem",
            encodingFormat: "image",
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius est non mi consequat, ac gravida elit tempor. Proin faucibus, leo id consectetur dapibus, diam odio sollicitudin ex, quis rhoncus orci ex ut ante. Nullam gravida justo in sagittis malesuada. Suspendisse lacinia viverra justo, eu ultricies odio tempus eu.",
        url: "#",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "BRL",
          highPrice: 90,
          lowPrice: 90,
          offerCount: 1,
          offers: [
            {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              price: 90,
              inventoryLevel: {
                value: 1000,
              },
              priceSpecification: [
                {
                  "@type": "UnitPriceSpecification",
                  priceType: "https://schema.org/ListPrice",
                  price: 120,
                },
              ],
            },
          ],
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            "name": "category",
            "value": "Categoria",
            "valueReference": "SPECIFICATION",
          },
          {
            "@type": "PropertyValue",
            "name": "category",
            "value": "Categoria",
            "valueReference": "SPECIFICATION",
          },
          {
            "@type": "PropertyValue",
            "name": "category",
            "value": "Categoria",
            "valueReference": "SPECIFICATION",
          },
        ],
      }]}
      forceErrorFallback={false}
    />
  );
}

export const loader = (props: Props, req: Request, ctx: AppContext) => {
  return props;
};

function ProductCardItem({
  product,
  animateImage,
  widthSize,
}: {
  product: Product;
  animateImage?: boolean;
  widthSize?: WidthSize;
}) {
  const {
    name,
    image,
    description,
    url,
    offers,
    additionalProperty,
    productID,
  } = product;
  const { price = 0, listPrice = 0 } = useOffer(offers);

  const specifications = additionalProperty
    ? additionalProperty.map(({ name, value }) => {
      if (name === "category") return value;
      if (specificationsIgnore.includes(name ?? "")) return undefined;
      return name + " " + value;
    }).filter((value) => typeof value === "string")
    : [];

  return (
    <div
      className={`grid lg:grid-cols-[max-content_auto_210px] grid-cols-[100px_auto_170px] lg:p-6 p-4 bg-[#424242] text-white rounded-lg ${widthSize}`}
    >
      <div>
        <a
          href={url}
          className="flex items-center justify-center bg-white rounded-lg lg:w-[210px] lg:h-[210px] h-full overflow-hidden"
        >
          <Image
            src={image?.[0].url ?? "https://placehold.co/180"}
            alt={image?.[0].alternateName ?? "Alternate Text"}
            width={180}
            height={180}
            className={`rounded-lg ${
              animateImage
                ? "transition ease-in-out duration-100 hover:scale-75"
                : ""
            }`}
          />
        </a>
      </div>
      <div className="px-3.5 overflow-hidden lg:min-w-72">
        <h3 className="lg:text-xl text-lg">{name}</h3>
        {specifications.length && (
          <ul className="flex flex-wrap	lg:my-4 my-2">
            {specifications.map((value, i) => (
              <li key={i} className="text-xs text-[#ccc]">
                {i > 0 && <span className="mx-1">•</span>}
                {value}
              </li>
            ))}
          </ul>
        )}
        <p className="lg:text-base text-sm text-ellipsis overflow-hidden	line-clamp-2 lg:my-4 my-2">
          {description}
        </p>
        <Votes productId={productID} />
      </div>
      <div className="flex flex-col justify-between border-l pl-3.5">
        <div className="flex items-center gap-2">
          <span className="font-medium text-xl">
            {formatPrice(price)}
          </span>
          {listPrice > price && (
            <span className="line-through text-red-400 text-xs">
              {formatPrice(listPrice)}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <a href={url} className="btn bg-accent">Details</a>
          <button className="btn bg-accent">Add To Wishlist</button>
        </div>
      </div>
    </div>
  );
}

function HorizontalProductCard({
  products,
  forceErrorFallback = false,
  widthSize = "max-w-full",
  animateImage = false,
}: Props) {
  if (forceErrorFallback) throw new Error("Force Error Fallback");

  if (products === null || products?.length === 0) return <></>;

  return (
    <div className="container px-3">
      <div className="flex flex-col gap-2">
        {products?.map((product) => (
          <ProductCardItem
            product={product}
            animateImage={animateImage}
            widthSize={widthSize}
          />
        ))}
      </div>
    </div>
  );
}

export default HorizontalProductCard;

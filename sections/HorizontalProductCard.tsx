import { ProductDetailsPage } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import { useOffer } from "../sdk/useOffer.ts";
import { formatPrice } from "../sdk/format.ts";
import { AppContext } from "deco-sites/brycamp/apps/site.ts";
import Votes from "../islands/HorizontalProductCard/Votes.tsx";

export interface Props {
  /** @title Integration */
  productPage: ProductDetailsPage | null;
  forceErrorFallback?: boolean;
  animateImage?: boolean;
  widthSize?:
    | "max-w-xl"
    | "max-w-2xl"
    | "max-w-3xl"
    | "max-w-4xl"
    | "max-w-5xl"
    | "max-w-6xl"
    | "max-w-7xl"
    | "max-w-full";
}

const specificationsIgnore = ["RefId", "cluster"];

export function ErrorFallback() {
  return (
    <HorizontalProductCard
      productPage={{
        "@type": "ProductDetailsPage",
        "breadcrumbList": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "name": "Feminino",
              "item": "https://deco-sites-storefront.deno.dev/feminino",
              "position": 1,
            },
            {
              "@type": "ListItem",
              "name": "Roupas",
              "item": "https://deco-sites-storefront.deno.dev/feminino/roupas",
              "position": 2,
            },
            {
              "@type": "ListItem",
              "name": "Saias",
              "item":
                "https://deco-sites-storefront.deno.dev/feminino/roupas/saias",
              "position": 3,
            },
            {
              "@type": "ListItem",
              "name": "Saia Jeans Light Passion",
              "item":
                "https://deco-sites-storefront.deno.dev/saia-jeans-light-passion/p",
              "position": 4,
            },
          ],
          "numberOfItems": 4,
        },
        product: {
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
        },
      }}
      forceErrorFallback={false}
    />
  );
}

export function LoadingFallback() {
  return (
    <HorizontalProductCard
      productPage={{
        "@type": "ProductDetailsPage",
        "breadcrumbList": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "name": "Feminino",
              "item": "https://deco-sites-storefront.deno.dev/feminino",
              "position": 1,
            },
            {
              "@type": "ListItem",
              "name": "Roupas",
              "item": "https://deco-sites-storefront.deno.dev/feminino/roupas",
              "position": 2,
            },
            {
              "@type": "ListItem",
              "name": "Saias",
              "item":
                "https://deco-sites-storefront.deno.dev/feminino/roupas/saias",
              "position": 3,
            },
            {
              "@type": "ListItem",
              "name": "Saia Jeans Light Passion",
              "item":
                "https://deco-sites-storefront.deno.dev/saia-jeans-light-passion/p",
              "position": 4,
            },
          ],
          "numberOfItems": 4,
        },
        product: {
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
        },
      }}
      forceErrorFallback={false}
    />
  );
}

export const loader = (props: Props, req: Request, ctx: AppContext) => {
  return props;
};

function HorizontalProductCard(
  {
    productPage,
    forceErrorFallback = false,
    widthSize = "max-w-full",
    animateImage = false,
  }: Props,
) {
  if (forceErrorFallback) throw new Error("Force Error Fallback");

  if (productPage === null) return <></>;

  const { product } = productPage;
  const { name, image, description, url, offers, additionalProperty } = product;
  const { price = 0, listPrice = 0 } = useOffer(offers);

  if (image === undefined) return <></>;

  const specifications = additionalProperty
    ? additionalProperty.map(({ name, value }) => {
      if (name === "category") return value;
      if (specificationsIgnore.includes(name ?? "")) return undefined;
      return name + " " + value;
    }).filter((value) => typeof value === "string")
    : [];

  return (
    <div className="container px-3">
      <div
        className={`grid lg:grid-cols-[max-content_auto_210px] grid-cols-[100px_auto_170px] p-6 bg-[#424242] text-white rounded-lg ${widthSize}`}
      >
        <div>
          <a
            href={url}
            className="flex items-center justify-center bg-white rounded-lg lg:w-[210px] lg:h-[210px] overflow-hidden"
          >
            <Image
              src={image[0].url ?? "https://placehold.co/180"}
              alt={image[0].alternateName ?? "Alternate Text"}
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
          <h3 className="text-xl">{name}</h3>
          {specifications.length && (
            <ul className="flex flex-wrap	my-4">
              {specifications.map((value, i) => (
                <li key={i} className="text-xs text-[#ccc]">
                  {i > 0 && <span className="mx-1">•</span>}
                  {value}
                </li>
              ))}
            </ul>
          )}
          <p className="text-base text-ellipsis overflow-hidden	line-clamp-3">
            {description}
          </p>
          <Votes />
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
    </div>
  );
}

export default HorizontalProductCard;

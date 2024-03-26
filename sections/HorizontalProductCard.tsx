import { ProductDetailsPage } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import { useOffer } from "../sdk/useOffer.ts";
import { formatPrice } from "../sdk/format.ts";
import { AppContext } from "deco-sites/brycamp/apps/site.ts";

export interface Props {
  /** @title Integration */
  productPage: ProductDetailsPage | null;
  forceErrorFallback?: boolean;
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
  { productPage, forceErrorFallback = false }: Props,
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
      <div className="grid lg:grid-cols-[max-content_auto_210px] lg:gap-0 gap-6 p-6 bg-[#424242] text-white rounded-lg">
        <div className="lg:block flex justify-center bg-white rounded-lg">
          <a href={url}>
            <Image
              src={image[0].url ?? "https://placehold.co/210"}
              alt={image[0].alternateName ?? "Alternate Text"}
              width={210}
              height={210}
              className="rounded-lg"
            />
          </a>
        </div>
        <div className="lg:px-3.5 overflow-hidden">
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
          <p className="text-base lg:truncate">{description}</p>
        </div>
        <div className="flex flex-col justify-between lg:border-l lg:pl-3.5 lg:gap-0 gap-2">
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

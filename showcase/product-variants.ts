export type ProductVariant = {
  id: string;
  label: string;
  attributes: Record<string, string>;
  price: number;
  available: boolean;
};

export function selectVariant(
  variants: ProductVariant[],
  attributes: Record<string, string>
) {
  return variants.find(variant =>
    Object.entries(attributes).every(
      ([key, value]) => variant.attributes[key] === value
    )
  );
}

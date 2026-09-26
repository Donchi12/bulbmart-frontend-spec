export type CartLine = {
  productId: string;
  variantId: string;
  name: string;
  unitPrice: number;
  quantity: number;
};

export function addLine(lines: CartLine[], incoming: CartLine) {
  const existing = lines.find(
    line => line.productId === incoming.productId && line.variantId === incoming.variantId
  );

  if (!existing) return [...lines, incoming];

  return lines.map(line =>
    line === existing
      ? { ...line, quantity: line.quantity + incoming.quantity }
      : line
  );
}

export function cartTotal(lines: CartLine[]) {
  return lines.reduce((sum, line) => sum + line.unitPrice * line.quantity, 0);
}

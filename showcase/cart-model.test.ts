import { describe, expect, it } from "vitest";
import { addLine, cartTotal } from "./cart-model";

describe("cart model", () => {
  it("merges identical product variants", () => {
    const first = addLine([], {
      productId: "p1",
      variantId: "red-m",
      name: "Example shirt",
      unitPrice: 25,
      quantity: 1,
    });

    const second = addLine(first, {
      productId: "p1",
      variantId: "red-m",
      name: "Example shirt",
      unitPrice: 25,
      quantity: 2,
    });

    expect(second).toHaveLength(1);
    expect(second[0].quantity).toBe(3);
    expect(cartTotal(second)).toBe(75);
  });
});

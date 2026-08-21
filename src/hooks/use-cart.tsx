import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { CartLine, Product } from "@/lib/shop";

type CartContextValue = {
  lines: CartLine[];
  total: number;
  count: number;
  add: (product: Product, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setOpen] = useState(false);

  const add = useCallback((product: Product, qty = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.product.id === product.id);
      if (existing) {
        return prev.map((l) => (l.product.id === product.id ? { ...l, qty: l.qty + qty } : l));
      }
      return [...prev, { product, qty }];
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => l.product.id !== id)
        : prev.map((l) => (l.product.id === id ? { ...l, qty } : l)),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.product.id !== id));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo(() => {
    const total = lines.reduce((s, l) => s + l.product.price * l.qty, 0);
    const count = lines.reduce((s, l) => s + l.qty, 0);
    return { lines, total, count, add, setQty, remove, clear, isOpen, setOpen };
  }, [lines, add, setQty, remove, clear, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

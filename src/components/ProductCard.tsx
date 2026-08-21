import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { QtyStepper } from "@/components/QtyStepper";
import { useCart } from "@/hooks/use-cart";
import { useLanguage } from "@/hooks/use-language";
import { formatINR, type Product } from "@/lib/shop";

export function ProductCard({
  product,
  onOpenDetails,
}: {
  product: Product;
  onOpenDetails: (product: Product) => void;
}) {
  const { add, setOpen } = useCart();
  const { t, pick } = useLanguage();
  const [qty, setQty] = useState(1);

  const name = pick(product.nameEn, product.nameTa);

  return (
    <article className="glass-card animate-rise group flex flex-col overflow-hidden rounded-2xl">
      <button
        type="button"
        onClick={() => onOpenDetails(product)}
        aria-label={`${t("viewDetailsOf")} ${name} ${product.weight}`}
        className="relative block overflow-hidden"
      >
        <img
          src={product.image}
          alt={`${product.nameEn} ${product.weight} pack`}
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-[image:var(--gradient-gold)] px-3 py-1 text-xs font-semibold tracking-wide text-forest-deep">
          {product.weight}
        </span>
      </button>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div>
          <h3 className="font-display text-xl text-forest sm:text-2xl">{name}</h3>
          <p className="text-sm tracking-wide text-muted-foreground">{product.weight}</p>
        </div>
        <div className="gold-divider" />
        <p className="text-sm text-muted-foreground">
          {pick(product.blurbEn, product.blurbTa)}
        </p>

        <div className="mt-auto space-y-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <span className="font-display text-3xl text-forest">{formatINR(product.price)}</span>
            <QtyStepper qty={qty} onChange={setQty} label={`${name} ${product.weight}`} />
          </div>
          <div className="flex items-center justify-between rounded-xl bg-secondary/70 px-4 py-2 text-sm">
            <span className="text-muted-foreground">{t("subtotal")}</span>
            <span className="font-display text-lg text-forest">
              {formatINR(product.price * qty)}
            </span>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button
              variant="forest"
              size="lg"
              className="flex-1"
              onClick={() => {
                add(product, qty);
                setOpen(true);
                toast.success(`${name} ${product.weight} × ${qty} — ${t("addedToOrder")}`);
              }}
            >
              {t("addToOrder")}
            </Button>
            <Button
              variant="goldOutline"
              size="lg"
              className="flex-1"
              onClick={() => onOpenDetails(product)}
            >
              {t("details")}
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

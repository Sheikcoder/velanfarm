import { useEffect, useState } from "react";
import { Leaf, Sparkles, Clock } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { QtyStepper } from "@/components/QtyStepper";
import { useCart } from "@/hooks/use-cart";
import { useLanguage } from "@/hooks/use-language";
import { buildWhatsAppUrl, formatINR, type Product } from "@/lib/shop";

export function ProductDialog({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { add, setOpen } = useCart();
  const { t, pick, lang } = useLanguage();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (product) setQty(1);
  }, [product]);

  const name = product ? pick(product.nameEn, product.nameTa) : "";

  return (
    <Dialog open={!!product} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[92vh] overflow-y-auto bg-cream sm:max-w-3xl">
        {product && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl text-forest">
                {name}
                <span className="block text-sm font-normal tracking-wide text-muted-foreground">
                  {product.weight}
                </span>
              </DialogTitle>
            </DialogHeader>

            <div className="grid gap-6 sm:grid-cols-2">
              <img
                src={product.image}
                alt={`${product.nameEn} ${product.weight}`}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-2xl object-cover ring-1 ring-gold/40"
              />

              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">
                  {pick(product.blurbEn, product.blurbTa)}
                </p>
                <div className="gold-divider" />

                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
                    <span>
                      <strong className="text-forest">
                        {t(product.isDry ? "shelfLife" : "freshness")}:
                      </strong>{" "}
                      {t(product.isDry ? "shelfLifeBody" : "freshnessBody")}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="mt-0.5 size-4 shrink-0 text-gold" />
                    <span>
                      <strong className="text-forest">{t("naturallyGrown")}:</strong>{" "}
                      {t("naturallyGrownBody")}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 size-4 shrink-0 text-gold" />
                    <span>
                      <strong className="text-forest">{t("nutrition")}:</strong>
                      <span className="mt-1 block space-y-1">
                        {product.nutrition.map((n) => (
                          <span key={n} className="block text-muted-foreground">
                            • {n}
                          </span>
                        ))}
                      </span>
                    </span>
                  </li>
                </ul>

                <div className="gold-divider" />

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-display text-3xl text-forest">
                    {formatINR(product.price)}
                  </span>
                  <QtyStepper qty={qty} onChange={setQty} label={`${name} ${product.weight}`} />
                </div>
                <div className="flex items-center justify-between rounded-xl bg-secondary/70 px-4 py-2 text-sm">
                  <span className="text-muted-foreground">{t("total")}</span>
                  <span className="font-display text-lg text-forest">
                    {formatINR(product.price * qty)}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    variant="forest"
                    size="lg"
                    onClick={() => {
                      add(product, qty);
                      onClose();
                      setOpen(true);
                      toast.success(`${name} ${product.weight} × ${qty} — ${t("addedToOrder")}`);
                    }}
                  >
                    {t("addToCart")}
                  </Button>
                  <Button variant="whatsapp" size="lg" asChild>
                    <a
                      href={buildWhatsAppUrl([{ product, qty }], lang)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("orderViaWhatsApp")}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

import { Trash2, ShoppingBasket } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { QtyStepper } from "@/components/QtyStepper";
import { useCart } from "@/hooks/use-cart";
import { useLanguage } from "@/hooks/use-language";
import { buildWhatsAppUrl, formatINR, WHATSAPP_NUMBER } from "@/lib/shop";

export function CartSheet() {
  const { lines, total, setQty, remove, isOpen, setOpen } = useCart();
  const { t, pick, lang } = useLanguage();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col gap-0 bg-cream sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl text-forest">{t("yourOrder")}</SheetTitle>
        </SheetHeader>
        <div className="gold-divider my-4" />

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
            <ShoppingBasket className="size-10 text-gold" />
            <p className="text-sm text-muted-foreground">{t("emptyBasket")}</p>
          </div>
        ) : (
          <div className="flex-1 space-y-4 overflow-y-auto pr-1">
            {lines.map((line) => {
              const name = pick(line.product.nameEn, line.product.nameTa);
              return (
                <div
                  key={line.product.id}
                  className="glass-card grid grid-cols-[64px_minmax(0,1fr)_auto] items-center gap-3 rounded-xl p-3"
                >
                  <img
                    src={line.product.image}
                    alt={`${line.product.nameEn} ${line.product.weight}`}
                    loading="lazy"
                    width={64}
                    height={64}
                    className="size-16 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate font-display text-base text-forest">{name}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {line.product.weight} · {formatINR(line.product.price)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <QtyStepper
                        size="sm"
                        qty={line.qty}
                        label={`${name} ${line.product.weight}`}
                        onChange={(q) => setQty(line.product.id, q)}
                      />
                      <span className="font-display text-sm">
                        = {formatINR(line.product.price * line.qty)}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={`${t("remove")} ${name} ${line.product.weight}`}
                    onClick={() => remove(line.product.id)}
                    className="shrink-0 rounded-full p-2 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-4 space-y-4">
          <div className="gold-divider" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{t("total")}</span>
            <span className="font-display text-2xl text-forest">{formatINR(total)}</span>
          </div>
          <Button
            asChild={lines.length > 0}
            variant="whatsapp"
            size="xl"
            className="w-full"
            disabled={lines.length === 0}
          >
            {lines.length > 0 ? (
              <a href={buildWhatsAppUrl(lines, lang)} target="_blank" rel="noopener noreferrer">
                {t("orderViaWhatsApp")}
              </a>
            ) : (
              <span>{t("orderViaWhatsApp")}</span>
            )}
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            {t("orderOnWhatsApp")} · {WHATSAPP_NUMBER}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

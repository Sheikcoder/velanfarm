import { useEffect, useState } from "react";
import { ShoppingBasket, Menu } from "lucide-react";
import logo from "@/assets/velan-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useCart } from "@/hooks/use-cart";
import { useLanguage } from "@/hooks/use-language";
import type { TranslationKey } from "@/lib/i18n";

const links: { href: string; key: TranslationKey }[] = [
  { href: "#products", key: "navProducts" },
  { href: "#why", key: "navWhy" },
  { href: "#farm", key: "navFarm" },
  { href: "#reviews", key: "navReviews" },
  { href: "#contact", key: "navContact" },
];

export function SiteHeader() {
  const { count, setOpen } = useCart();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/90 shadow-[var(--shadow-soft)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="Velan Oyster Mushroom Farm logo"
            width={56}
            height={56}
            className="size-12 shrink-0 rounded-full ring-1 ring-gold/50 sm:size-14"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-base leading-tight text-forest sm:text-lg">
              {t("brandName")}
            </span>
            <span className="block truncate text-[11px] tracking-[0.18em] text-gold uppercase sm:text-xs">
              {t("brandTagline")}
            </span>
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-2">
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-forest/85 transition-colors hover:text-forest"
              >
                {t(l.key)}
              </a>
            ))}
          </nav>

          <LanguageToggle />

          <Button
            variant="goldOutline"
            size="default"
            onClick={() => setOpen(true)}
            aria-label={`${t("openBasket")} — ${count}`}
            className="relative rounded-full"
          >
            <ShoppingBasket />
            <span className="hidden sm:inline">{t("order")}</span>
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 grid size-5 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-[11px] font-bold text-forest-deep">
                {count}
              </span>
            )}
          </Button>

          <button
            type="button"
            aria-label={t("toggleMenu")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-gold/50 text-forest lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="animate-rise border-t border-gold/25 bg-cream/95 px-4 pb-4 backdrop-blur-xl lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-gold/15 py-3 font-display text-forest last:border-0"
            >
              {t(l.key)}
            </a>
          ))}
          <LanguageToggle className="mt-4 w-fit" />
        </nav>
      )}
    </header>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Leaf, Sprout, ShieldCheck, Truck, MessageCircle, Star, ShoppingBasket } from "lucide-react";
import heroImage from "@/assets/hero-mushroom.jpg";
import farmImage from "@/assets/farm.jpg";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { ProductDialog } from "@/components/ProductDialog";
import { CartSheet } from "@/components/CartSheet";
import { CartProvider, useCart } from "@/hooks/use-cart";
import { LanguageProvider, useLanguage } from "@/hooks/use-language";
import type { TranslationKey } from "@/lib/i18n";
import { products, formatINR, enquiryUrl, WHATSAPP_NUMBER, type Product } from "@/lib/shop";

const title = "வேலன் சிப்பி காளான் பண்ணை | Velan Oyster Mushroom Farm";
const description =
  "Farm-fresh oyster mushrooms from Velan Oyster Mushroom Farm. 200g ₹70, 1kg ₹350. Naturally grown, hygienically packed, order on WhatsApp 9342078848.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Velan Oyster Mushroom Farm",
          alternateName: "வேலன் சிப்பி காளான் பண்ணை",
          telephone: `+91${WHATSAPP_NUMBER}`,
          address: { "@type": "PostalAddress", addressRegion: "Tamil Nadu", addressCountry: "IN" },
          makesOffer: products.map((p) => ({
            "@type": "Offer",
            price: p.price,
            priceCurrency: "INR",
            itemOffered: { "@type": "Product", name: `${p.nameEn} ${p.weight}` },
          })),
        }),
      },
    ],
  }),
  component: () => (
    <LanguageProvider>
      <CartProvider>
        <HomePage />
      </CartProvider>
    </LanguageProvider>
  ),
});

const reasons: { icon: typeof Leaf; title: TranslationKey; body: TranslationKey }[] = [
  { icon: Sprout, title: "why1", body: "why1Body" },
  { icon: Leaf, title: "why2", body: "why2Body" },
  { icon: ShieldCheck, title: "why3", body: "why3Body" },
  { icon: Truck, title: "why4", body: "why4Body" },
];

const reviews: { name: string; place: string; key: TranslationKey }[] = [
  { name: "Kavitha R.", place: "Erode", key: "review1" },
  { name: "Sathish M.", place: "Coimbatore", key: "review2" },
  { name: "Anitha S.", place: "Salem", key: "review3" },
];

const steps: { n: string; key: TranslationKey }[] = [
  { n: "01", key: "step1" },
  { n: "02", key: "step2" },
  { n: "03", key: "step3" },
  { n: "04", key: "step4" },
];

function HomePage() {
  const [selected, setSelected] = useState<Product | null>(null);
  const { t, lang } = useLanguage();

  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />
      <CartSheet />
      <ProductDialog product={selected} onClose={() => setSelected(null)} />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_60%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div className="animate-rise">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-card/70 px-4 py-1.5 text-xs tracking-[0.2em] text-forest uppercase">
                <Leaf className="size-3.5 text-gold" /> {t("heroBadge")}
              </span>
              <h1 className="mt-6 font-display text-4xl leading-tight text-forest sm:text-5xl lg:text-6xl">
                {t("heroTitle")}
                <span className="mt-3 block text-2xl text-gold-gradient sm:text-3xl lg:text-4xl">
                  {t("heroSubtitle")}
                </span>
              </h1>
              <div className="gold-divider my-6 max-w-sm" />
              <p className="max-w-xl text-base text-muted-foreground">{t("heroBody")}</p>
              <p className="mt-3 max-w-xl text-base text-muted-foreground">{t("heroBody2")}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="gold" size="xl" asChild>
                  <a href="#products">
                    <ShoppingBasket /> {t("orderNow")}
                  </a>
                </Button>
                <Button variant="goldOutline" size="xl" asChild>
                  <a href="#products">{t("viewProducts")}</a>
                </Button>
                <Button variant="whatsapp" size="xl" asChild>
                  <a href={enquiryUrl(lang)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle /> WhatsApp {WHATSAPP_NUMBER}
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[image:var(--gradient-gold)] opacity-25 blur-2xl" />
              <img
                src={heroImage}
                alt="Fresh cluster of white oyster mushrooms on a wooden stump at Velan farm"
                width={1600}
                height={1200}
                className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)] ring-1 ring-gold/40"
              />
              <div className="glass-card animate-float absolute -bottom-6 left-4 rounded-2xl px-5 py-3 sm:left-8">
                <p className="text-xs tracking-widest text-muted-foreground uppercase">
                  {t("from")}
                </p>
                <p className="font-display text-2xl text-forest">{formatINR(70)} / 200g</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="eyebrowProducts" title="productsTitle" sub="productsSub" />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} onOpenDetails={setSelected} />
            ))}
          </div>
        </section>

        {/* Why choose us */}
        <section id="why" className="bg-secondary/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeading eyebrow="eyebrowWhy" title="whyTitle" sub="whySub" />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map(({ icon: Icon, title: ttl, body }) => (
                <div
                  key={ttl}
                  className="glass-card rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-[image:var(--gradient-gold)]">
                    <Icon className="size-5 text-forest-deep" />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-forest">{t(ttl)}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{t(body)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Farm */}
        <section id="farm" className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <img
              src={farmImage}
              alt="Rows of oyster mushroom grow bags inside the Velan farm shed"
              loading="lazy"
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)] ring-1 ring-gold/40"
            />
            <div>
              <SectionHeading
                align="left"
                eyebrow="eyebrowFarm"
                title="farmTitle"
                sub="farmSub"
              />
              <p className="mt-6 text-base text-muted-foreground">{t("farmBody1")}</p>
              <p className="mt-4 text-base text-muted-foreground">{t("farmBody2")}</p>
              <dl className="mt-8 grid grid-cols-3 gap-4">
                {([
                  ["100%", "statNatural"],
                  ["0", "statChemicals"],
                  ["24h", "statHarvest"],
                ] as [string, TranslationKey][]).map(([k, v]) => (
                  <div
                    key={v}
                    className="rounded-xl border border-gold/40 bg-card/70 p-4 text-center"
                  >
                    <dt className="font-display text-2xl text-forest">{k}</dt>
                    <dd className="mt-1 text-[11px] tracking-wider text-muted-foreground uppercase">
                      {t(v)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* How to order */}
        <section id="how" className="bg-[image:var(--gradient-forest)] py-16 text-cream lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <p className="text-center text-xs tracking-[0.3em] text-gold uppercase">
              {t("eyebrowHow")}
            </p>
            <h2 className="mt-3 text-center font-display text-3xl sm:text-4xl">{t("howTitle")}</h2>
            <div className="gold-divider mx-auto mt-6 max-w-xs" />
            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <li
                  key={s.n}
                  className="rounded-2xl border border-gold/30 bg-cream/5 p-6 backdrop-blur-sm"
                >
                  <span className="font-display text-3xl text-gold">{s.n}</span>
                  <p className="mt-3 text-sm text-cream/80">{t(s.key)}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="eyebrowReviews" title="reviewsTitle" sub="reviewsSub" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <blockquote
                key={r.name}
                className="glass-card rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{t(r.key)}</p>
                <footer className="mt-5 font-display text-base text-forest">
                  {r.name}
                  <span className="block text-xs tracking-wider text-muted-foreground uppercase">
                    {r.place}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-4xl px-4 pb-24 lg:px-8">
          <div className="glass-card rounded-[2rem] p-8 text-center sm:p-12">
            <SectionHeading eyebrow="eyebrowContact" title="contactTitle" sub="contactSub" />
            <p className="mt-6 text-base text-muted-foreground">{t("contactBody")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button variant="whatsapp" size="xl" asChild>
                <a href={enquiryUrl(lang)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle /> WhatsApp {WHATSAPP_NUMBER}
                </a>
              </Button>
              <Button variant="goldOutline" size="xl" asChild>
                <a href={`tel:+91${WHATSAPP_NUMBER}`}>
                  {t("call")} +91 {WHATSAPP_NUMBER}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingBar />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title: titleKey,
  sub,
  align = "center",
}: {
  eyebrow: TranslationKey;
  title: TranslationKey;
  sub: TranslationKey;
  align?: "center" | "left";
}) {
  const { t } = useLanguage();
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center" : ""}>
      <p className="text-xs tracking-[0.3em] text-gold uppercase">{t(eyebrow)}</p>
      <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">{t(titleKey)}</h2>
      <p className="mt-2 text-base text-muted-foreground">{t(sub)}</p>
      <div className={`gold-divider mt-6 max-w-xs ${isCenter ? "mx-auto" : ""}`} />
    </div>
  );
}

function FloatingBar() {
  const { count, total, setOpen } = useCart();
  const { t, lang } = useLanguage();
  return (
    <>
      <a
        href={enquiryUrl(lang)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("chatWhatsApp")}
        className="fixed right-4 bottom-24 z-40 grid size-14 place-items-center rounded-full bg-[oklch(0.62_0.15_150)] text-cream shadow-[var(--shadow-soft)] transition-transform hover:scale-110 sm:bottom-6"
      >
        <MessageCircle className="size-6" />
      </a>

      {count > 0 && (
        <div className="animate-rise fixed inset-x-3 bottom-3 z-40 sm:right-24 sm:left-auto sm:w-80">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="glass-card flex w-full items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left"
          >
            <span className="min-w-0">
              <span className="block truncate text-xs tracking-widest text-muted-foreground uppercase">
                {count} {count > 1 ? t("items") : t("item")} · {t("viewOrder")}
              </span>
              <span className="block font-display text-xl text-forest">{formatINR(total)}</span>
            </span>
            <ShoppingBasket className="size-5 shrink-0 text-gold" />
          </button>
        </div>
      )}
    </>
  );
}

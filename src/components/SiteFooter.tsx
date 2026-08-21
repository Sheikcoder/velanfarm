import { Phone, MessageCircle, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { WHATSAPP_NUMBER, enquiryUrl, LOGO_SRC } from "@/lib/shop";

const socialLinks = [
  {
    key: "socialYouTube" as const,
    href: "#", // TODO: replace with your YouTube channel URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    key: "socialFacebook" as const,
    href: "#", // TODO: replace with your Facebook page URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    key: "socialInstagram" as const,
    href: "#", // TODO: replace with your Instagram profile URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    key: "socialTwitter" as const,
    href: "#", // TODO: replace with your Twitter/X profile URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-[image:var(--gradient-forest)] text-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex items-start gap-4">
            <img
              src={LOGO_SRC}
              alt="Velan Oyster Mushroom Farm logo"
              loading="lazy"
              width={80}
              height={80}
              className="size-20 shrink-0 rounded-full ring-1 ring-gold/50"
            />
            <div className="min-w-0">
              <p className="font-display text-xl">{t("brandName")}</p>
              <p className="text-sm tracking-[0.18em] text-gold uppercase">
                {t("brandTagline")}
              </p>
              <p className="mt-3 text-sm text-cream/70">{t("footerBlurb")}</p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg text-gold">{t("contact")}</h3>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href={`tel:+91${WHATSAPP_NUMBER}`}
                className="flex items-center gap-2 hover:text-gold"
              >
                <Phone className="size-4 text-gold" /> +91 {WHATSAPP_NUMBER}
              </a>
              <a
                href={enquiryUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold"
              >
                <MessageCircle className="size-4 text-gold" /> WhatsApp {WHATSAPP_NUMBER}
              </a>
              <p className="flex items-start gap-2 text-cream/70">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" /> {t("location")}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg text-gold">{t("explore")}</h3>
            <div className="mt-4 grid gap-2 text-sm text-cream/80">
              <a href="#products" className="hover:text-gold">{t("navProducts")}</a>
              <a href="#why" className="hover:text-gold">{t("navWhy")}</a>
              <a href="#farm" className="hover:text-gold">{t("navFarm")}</a>
              <a href="#how" className="hover:text-gold">{t("navHow")}</a>
            </div>
          </div>
        </div>

        <div className="gold-divider my-8" />

        <div className="flex flex-col items-center gap-4">
          <p className="text-sm font-display text-gold">{t("followUs")}</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(s.key)}
                className="grid size-11 place-items-center rounded-full border border-gold/40 bg-cream/10 text-cream transition-all hover:scale-110 hover:border-gold hover:bg-gold hover:text-forest-deep"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p className="text-center text-xs text-cream/60">
            © {new Date().getFullYear()} Velan Oyster Mushroom Farm · வேலன் சிப்பி காளான் பண்ணை
          </p>
        </div>
      </div>
    </footer>
  );
}

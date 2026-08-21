import { Check, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import type { Lang } from "@/lib/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const options: { value: Lang; label: string; short: string }[] = [
  { value: "en", label: "English", short: "EN" },
  { value: "ta", label: "தமிழ்", short: "தமிழ்" },
];

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();
  const active = options.find((o) => o.value === lang) ?? { label: "English" };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t("language")}
        className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gold/60 bg-card/70 px-3 py-2 text-sm font-medium text-forest backdrop-blur-sm transition-colors hover:border-gold hover:bg-card focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none ${className}`}
      >
        <Globe className="size-4 text-gold" aria-hidden="true" />
        <span>{active.label}</span>
        <ChevronDown className="size-3.5 text-forest/60" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40 border-gold/30 bg-cream">
        {options.map((o) => (
          <DropdownMenuItem
            key={o.value}
            onSelect={() => setLang(o.value)}
            className="cursor-pointer gap-2 font-medium text-forest focus:bg-gold/15 focus:text-forest"
          >
            <Check
              className={`size-4 text-gold ${lang === o.value ? "opacity-100" : "opacity-0"}`}
              aria-hidden="true"
            />
            {o.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

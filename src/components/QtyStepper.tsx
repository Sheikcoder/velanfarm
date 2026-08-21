import { Minus, Plus } from "lucide-react";

type Props = {
  qty: number;
  onChange: (qty: number) => void;
  label: string;
  min?: number;
  size?: "sm" | "md";
};

export function QtyStepper({ qty, onChange, label, min = 1, size = "md" }: Props) {
  const dim = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-gold/50 bg-secondary/60 p-1">
      <button
        type="button"
        aria-label={`Decrease quantity of ${label}`}
        onClick={() => onChange(qty - 1)}
        disabled={qty <= min}
        className={`${dim} grid place-items-center rounded-full text-forest transition-colors hover:bg-gold/25 disabled:opacity-40`}
      >
        <Minus className="size-4" />
      </button>
      <span
        aria-live="polite"
        className={`min-w-8 text-center font-display ${size === "sm" ? "text-sm" : "text-base"}`}
      >
        {qty}
      </span>
      <button
        type="button"
        aria-label={`Increase quantity of ${label}`}
        onClick={() => onChange(qty + 1)}
        className={`${dim} grid place-items-center rounded-full text-forest transition-colors hover:bg-gold/25`}
      >
        <Plus className="size-4" />
      </button>
    </div>
  );
}

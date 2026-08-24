import { r as __toESM } from "../_runtime.mjs";
import { a as formatINR, i as enquiryUrl, n as WHATSAPP_NUMBER, o as products, r as buildWhatsAppUrl, t as LOGO_SRC } from "./shop-DmKqM6AS.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime, r as Slot } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as require_lucide_react } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bbo0ovVW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lucide_react = require_lucide_react();
var hero_mushroom_default = "/assets/hero-mushroom-BwTcp8C9.jpg";
var farm_default = "/assets/farm-ERjjdX76.jpg";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			gold: "bg-[image:var(--gradient-gold)] text-forest-deep font-semibold shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5 hover:brightness-105",
			forest: "bg-[image:var(--gradient-forest)] text-cream shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5",
			whatsapp: "bg-[oklch(0.62_0.15_150)] text-cream font-semibold shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 hover:brightness-110",
			goldOutline: "border border-gold/60 bg-transparent text-forest hover:bg-gold/15 transition-colors"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			xl: "h-13 rounded-xl px-8 text-base tracking-wide",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var dictionary = {
	brandName: {
		en: "Velan Oyster Mushroom Farm",
		ta: "வேலன் சிப்பி காளான் பண்ணை"
	},
	brandTagline: {
		en: "Velan Oyster Mushroom Farm",
		ta: "Velan Oyster Mushroom Farm"
	},
	navProducts: {
		en: "Products",
		ta: "பொருட்கள்"
	},
	navWhy: {
		en: "Why Us",
		ta: "ஏன் வேலன்?"
	},
	navFarm: {
		en: "Our Farm",
		ta: "எங்கள் பண்ணை"
	},
	navReviews: {
		en: "Reviews",
		ta: "விமர்சனங்கள்"
	},
	navContact: {
		en: "Contact",
		ta: "தொடர்பு"
	},
	navHow: {
		en: "How to Order",
		ta: "ஆர்டர் செய்வது எப்படி"
	},
	order: {
		en: "Order",
		ta: "ஆர்டர்"
	},
	toggleMenu: {
		en: "Toggle menu",
		ta: "மெனுவை திற"
	},
	language: {
		en: "Language",
		ta: "மொழி"
	},
	heroBadge: {
		en: "Fresh · Healthy · Natural",
		ta: "புதியது · ஆரோக்கியம் · இயற்கை"
	},
	heroTitle: {
		en: "Velan Oyster Mushroom Farm",
		ta: "வேலன் சிப்பி காளான் பண்ணை"
	},
	heroSubtitle: {
		en: "Fresh Oyster Mushrooms, Naturally Grown",
		ta: "புதிய சிப்பி காளான், இயற்கையாக வளர்க்கப்பட்டது"
	},
	heroBody: {
		en: "Hand-harvested every morning at our own farm, packed the same hour and delivered straight to your kitchen — no cold storage, no middlemen.",
		ta: "எங்கள் பண்ணையில் தினமும் காலையில் அறுவடை செய்யப்படும் புதிய சிப்பி காளான் — இரசாயனம் இல்லை, சுத்தமான பேக்கிங், நேரடி விற்பனை."
	},
	heroBody2: {
		en: "Every pack is weighed, inspected and sealed within the hour of harvest, so it reaches you firm, sweet and truly farm-fresh.",
		ta: "அறுவடை செய்த ஒரு மணி நேரத்திற்குள் எடை பார்த்து, சோதித்து, பேக் செய்யப்படுகிறது — அதனால் காளான் புதியதாகவே உங்களை வந்து சேரும்."
	},
	orderNow: {
		en: "Order Now",
		ta: "ஆர்டர் செய்ய"
	},
	viewProducts: {
		en: "View Products",
		ta: "பொருட்களை பார்க்க"
	},
	from: {
		en: "From",
		ta: "தொடக்க விலை"
	},
	eyebrowProducts: {
		en: "Our Products",
		ta: "எங்கள் பொருட்கள்"
	},
	productsTitle: {
		en: "Our Products",
		ta: "எங்கள் பொருட்கள்"
	},
	productsSub: {
		en: "Choose your pack, we harvest to order",
		ta: "உங்கள் பேக்கை தேர்ந்தெடுங்கள், ஆர்டருக்கு பிறகே அறுவடை"
	},
	subtotal: {
		en: "Subtotal",
		ta: "மொத்தம்"
	},
	addToOrder: {
		en: "Add to Order",
		ta: "ஆர்டரில் சேர்க்க"
	},
	details: {
		en: "Details",
		ta: "விவரங்கள்"
	},
	viewDetailsOf: {
		en: "View details of",
		ta: "விவரங்களை பார்க்க"
	},
	addedToOrder: {
		en: "added to order",
		ta: "ஆர்டரில் சேர்க்கப்பட்டது"
	},
	freshness: {
		en: "Freshness",
		ta: "புத்துணர்வு"
	},
	freshnessBody: {
		en: "harvested the same day and delivered within hours — no cold storage.",
		ta: "அதே நாளில் அறுவடை செய்யப்பட்டு சில மணி நேரத்தில் டெலிவரி — குளிர் சேமிப்பு இல்லை."
	},
	naturallyGrown: {
		en: "Naturally grown",
		ta: "இயற்கையாக வளர்க்கப்பட்டது"
	},
	naturallyGrownBody: {
		en: "pesticide-free, on pasteurised paddy straw in our own farm shed.",
		ta: "பூச்சிக்கொல்லி இல்லாமல், பதப்படுத்தப்பட்ட நெல் வைக்கோலில் எங்கள் பண்ணையில்."
	},
	nutrition: {
		en: "Nutrition",
		ta: "ஊட்டச்சத்து"
	},
	total: {
		en: "Total",
		ta: "மொத்தம்"
	},
	addToCart: {
		en: "Add to Cart",
		ta: "கூடையில் சேர்க்க"
	},
	orderViaWhatsApp: {
		en: "Order via WhatsApp",
		ta: "WhatsApp மூலம் ஆர்டர் செய்ய"
	},
	yourOrder: {
		en: "Your Order",
		ta: "உங்கள் ஆர்டர்"
	},
	emptyBasket: {
		en: "Your basket is empty",
		ta: "கூடை காலியாக உள்ளது"
	},
	remove: {
		en: "Remove",
		ta: "நீக்கு"
	},
	openBasket: {
		en: "Open order basket",
		ta: "ஆர்டர் கூடையை திற"
	},
	orderOnWhatsApp: {
		en: "Order on WhatsApp",
		ta: "WhatsApp மூலம் ஆர்டர்"
	},
	viewOrder: {
		en: "View order",
		ta: "ஆர்டரை பார்க்க"
	},
	items: {
		en: "items",
		ta: "பொருட்கள்"
	},
	item: {
		en: "item",
		ta: "பொருள்"
	},
	decrease: {
		en: "Decrease quantity",
		ta: "அளவை குறை"
	},
	increase: {
		en: "Increase quantity",
		ta: "அளவை கூட்டு"
	},
	eyebrowWhy: {
		en: "Why Choose Us",
		ta: "ஏன் எங்களை தேர்வு செய்ய"
	},
	whyTitle: {
		en: "Why Velan Mushrooms?",
		ta: "ஏன் வேலன் காளான்?"
	},
	whySub: {
		en: "Quality you can taste",
		ta: "சுவையில் தெரியும் தரம்"
	},
	why1: {
		en: "Freshly Harvested",
		ta: "புதிதாக அறுவடை"
	},
	why1Body: {
		en: "Picked the same morning you order — never stored.",
		ta: "நீங்கள் ஆர்டர் செய்யும் காலையிலேயே அறுவடை — சேமிப்பு இல்லை."
	},
	why2: {
		en: "Naturally Grown",
		ta: "இயற்கையாக வளர்க்கப்பட்டது"
	},
	why2Body: {
		en: "Pesticide-free paddy straw beds, pure water, zero chemicals.",
		ta: "பூச்சிக்கொல்லி இல்லாத நெல் வைக்கோல் படுக்கை, சுத்தமான நீர், இரசாயனம் இல்லை."
	},
	why3: {
		en: "Hygienically Packed",
		ta: "சுத்தமாக பேக் செய்யப்பட்டது"
	},
	why3Body: {
		en: "Food-grade breathable packing handled with gloves.",
		ta: "கையுறை அணிந்து செய்யப்படும் உணவுத் தர பேக்கிங்."
	},
	why4: {
		en: "Farm Fresh Direct",
		ta: "பண்ணையிலிருந்து நேரடி"
	},
	why4Body: {
		en: "No middlemen — farm to your kitchen, honest pricing.",
		ta: "இடைத்தரகர் இல்லை — பண்ணையிலிருந்து சமையலறைக்கு, நேர்மையான விலை."
	},
	eyebrowFarm: {
		en: "Our Farm",
		ta: "எங்கள் பண்ணை"
	},
	farmTitle: {
		en: "About Our Farm",
		ta: "எங்கள் பண்ணை பற்றி"
	},
	farmSub: {
		en: "Grown with patience, not chemicals",
		ta: "பொறுமையால் வளர்க்கிறோம், இரசாயனத்தால் அல்ல"
	},
	farmBody1: {
		en: "We grow oyster mushrooms on pasteurised paddy straw in a naturally ventilated shed. Temperature and humidity are monitored daily and we never use growth boosters or chemicals.",
		ta: "வேலன் பண்ணையில் பதப்படுத்தப்பட்ட நெல் வைக்கோலில் சிப்பி காளான் வளர்க்கிறோம். வெப்பநிலை, ஈரப்பதம் தினமும் கண்காணிக்கப்படுகிறது. வளர்ச்சி ஊக்கிகள் அல்லது இரசாயனங்கள் எதுவும் பயன்படுத்துவதில்லை."
	},
	farmBody2: {
		en: "Harvest happens by hand at dawn, and every pack is weighed, inspected and sealed within the hour — that is why our mushrooms stay firm, sweet and shelf-fresh far longer than market stock.",
		ta: "விடியற்காலையில் கையால் அறுவடை செய்யப்படுகிறது. ஒவ்வொரு பேக்கும் ஒரு மணி நேரத்திற்குள் எடை பார்த்து பேக் செய்யப்படுகிறது — அதனால் சந்தை காளானை விட நீண்ட நேரம் புதியதாக இருக்கும்."
	},
	statNatural: {
		en: "Natural",
		ta: "இயற்கை"
	},
	statChemicals: {
		en: "Chemicals",
		ta: "இரசாயனம்"
	},
	statHarvest: {
		en: "Harvest to door",
		ta: "அறுவடை முதல் வீடு வரை"
	},
	eyebrowHow: {
		en: "How to Order",
		ta: "ஆர்டர் செய்வது எப்படி"
	},
	howTitle: {
		en: "How to Order",
		ta: "ஆர்டர் செய்வது எப்படி"
	},
	step1: {
		en: "Pick your pack (200g or 1kg)",
		ta: "பொருளை தேர்வு செய்யுங்கள் (200g அல்லது 1kg)"
	},
	step2: {
		en: "Set the quantity — total updates live",
		ta: "அளவை தேர்ந்தெடுங்கள் — மொத்தம் உடனே மாறும்"
	},
	step3: {
		en: "Send the order on WhatsApp",
		ta: "WhatsApp மூலம் ஆர்டர் அனுப்புங்கள்"
	},
	step4: {
		en: "We confirm & deliver farm-fresh",
		ta: "உறுதி செய்து புதிய காளான் வழங்குகிறோம்"
	},
	eyebrowReviews: {
		en: "Customer Reviews",
		ta: "வாடிக்கையாளர் விமர்சனங்கள்"
	},
	reviewsTitle: {
		en: "Customer Reviews",
		ta: "வாடிக்கையாளர் விமர்சனங்கள்"
	},
	reviewsSub: {
		en: "Loved by families and chefs",
		ta: "குடும்பங்களும் சமையல் கலைஞர்களும் விரும்புகிறார்கள்"
	},
	review1: {
		en: "Very fresh mushrooms. Wonderful taste and a fair price too.",
		ta: "மிகவும் புதிய காளான். சுவை அற்புதம், விலையும் நியாயம்."
	},
	review2: {
		en: "Ordered on WhatsApp in the morning, delivered fresh the same evening. Excellent quality.",
		ta: "காலையில் WhatsApp-ல் ஆர்டர் செய்தேன், அதே மாலையில் புதியதாக கிடைத்தது. தரம் அற்புதம்."
	},
	review3: {
		en: "The 1kg pack is enough for our family. Packing is very clean.",
		ta: "1kg பேக் எங்கள் குடும்பத்திற்கு போதுமானது. பேக்கிங் மிகவும் சுத்தம்."
	},
	eyebrowContact: {
		en: "Contact Us",
		ta: "எங்களை தொடர்பு கொள்ள"
	},
	contactTitle: {
		en: "Contact Us",
		ta: "எங்களை தொடர்பு கொள்ள"
	},
	contactSub: {
		en: "We reply within minutes",
		ta: "சில நிமிடங்களில் பதில் அளிக்கிறோம்"
	},
	contactBody: {
		en: "WhatsApp us for orders, bulk supply or a farm visit.",
		ta: "ஆர்டர், மொத்த விற்பனை அல்லது பண்ணை வருகைக்கு WhatsApp செய்யுங்கள்."
	},
	call: {
		en: "Call",
		ta: "அழைக்க"
	},
	chatWhatsApp: {
		en: "Chat with us on WhatsApp",
		ta: "WhatsApp-ல் பேசுங்கள்"
	},
	footerBlurb: {
		en: "From our farm to your table — fresh, healthy and natural.",
		ta: "எங்கள் பண்ணையில் இருந்து உங்கள் உணவிற்கு — புதியது, ஆரோக்கியம், இயற்கையானது."
	},
	contact: {
		en: "Contact",
		ta: "தொடர்பு"
	},
	explore: {
		en: "Explore",
		ta: "பிரிவுகள்"
	},
	location: {
		en: "Tamil Nadu, India · Farm-direct delivery",
		ta: "தமிழ்நாடு, இந்தியா · நேரடி டெலிவரி"
	},
	followUs: {
		en: "Follow Us",
		ta: "எங்களை பின்தொடருங்கள்"
	},
	socialYouTube: {
		en: "YouTube",
		ta: "YouTube"
	},
	socialFacebook: {
		en: "Facebook",
		ta: "Facebook"
	},
	socialInstagram: {
		en: "Instagram",
		ta: "Instagram"
	},
	socialTwitter: {
		en: "Twitter",
		ta: "Twitter"
	}
};
var LanguageContext = (0, import_react.createContext)(null);
var STORAGE_KEY = "velan-lang";
function LanguageProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("en");
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (stored === "ta" || stored === "en") setLangState(stored);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = lang === "ta" ? "ta" : "en";
	}, [lang]);
	const setLang = (0, import_react.useCallback)((next) => {
		setLangState(next);
		window.localStorage.setItem(STORAGE_KEY, next);
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		lang,
		setLang,
		toggle: () => setLang(lang === "en" ? "ta" : "en"),
		t: (key) => dictionary[key]?.[lang] ?? key,
		pick: (en, ta) => lang === "ta" ? ta : en
	}), [lang, setLang]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageContext.Provider, {
		value,
		children
	});
}
function useLanguage() {
	const ctx = (0, import_react.useContext)(LanguageContext);
	if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
	return ctx;
}
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var options = [{
	value: "en",
	label: "English",
	short: "EN"
}, {
	value: "ta",
	label: "தமிழ்",
	short: "தமிழ்"
}];
function LanguageToggle({ className = "" }) {
	const { lang, setLang, t } = useLanguage();
	const active = options.find((o) => o.value === lang) ?? { label: "English" };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuTrigger, {
		"aria-label": t("language"),
		className: `inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gold/60 bg-card/70 px-3 py-2 text-sm font-medium text-forest backdrop-blur-sm transition-colors hover:border-gold hover:bg-card focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Globe, {
				className: "size-4 text-gold",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: active.label }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDown, {
				className: "size-3.5 text-forest/60",
				"aria-hidden": "true"
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
		align: "end",
		className: "min-w-40 border-gold/30 bg-cream",
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
			onSelect: () => setLang(o.value),
			className: "cursor-pointer gap-2 font-medium text-forest focus:bg-gold/15 focus:text-forest",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, {
				className: `size-4 text-gold ${lang === o.value ? "opacity-100" : "opacity-0"}`,
				"aria-hidden": "true"
			}), o.label]
		}, o.value))
	})] });
}
var CartContext = (0, import_react.createContext)(null);
function CartProvider({ children }) {
	const [lines, setLines] = (0, import_react.useState)([]);
	const [isOpen, setOpen] = (0, import_react.useState)(false);
	const add = (0, import_react.useCallback)((product, qty = 1) => {
		setLines((prev) => {
			if (prev.find((l) => l.product.id === product.id)) return prev.map((l) => l.product.id === product.id ? {
				...l,
				qty: l.qty + qty
			} : l);
			return [...prev, {
				product,
				qty
			}];
		});
	}, []);
	const setQty = (0, import_react.useCallback)((id, qty) => {
		setLines((prev) => qty <= 0 ? prev.filter((l) => l.product.id !== id) : prev.map((l) => l.product.id === id ? {
			...l,
			qty
		} : l));
	}, []);
	const remove = (0, import_react.useCallback)((id) => {
		setLines((prev) => prev.filter((l) => l.product.id !== id));
	}, []);
	const clear = (0, import_react.useCallback)(() => setLines([]), []);
	const value = (0, import_react.useMemo)(() => {
		const total = lines.reduce((s, l) => s + l.product.price * l.qty, 0);
		const count = lines.reduce((s, l) => s + l.qty, 0);
		return {
			lines,
			total,
			count,
			add,
			setQty,
			remove,
			clear,
			isOpen,
			setOpen
		};
	}, [
		lines,
		add,
		setQty,
		remove,
		clear,
		isOpen
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContext.Provider, {
		value,
		children
	});
}
function useCart() {
	const ctx = (0, import_react.useContext)(CartContext);
	if (!ctx) throw new Error("useCart must be used inside CartProvider");
	return ctx;
}
var links = [
	{
		href: "#products",
		key: "navProducts"
	},
	{
		href: "#why",
		key: "navWhy"
	},
	{
		href: "#farm",
		key: "navFarm"
	},
	{
		href: "#reviews",
		key: "navReviews"
	},
	{
		href: "#contact",
		key: "navContact"
	}
];
function SiteHeader() {
	const { count, setOpen } = useCart();
	const { t } = useLanguage();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-cream/90 shadow-[var(--shadow-soft)] backdrop-blur-xl" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#top",
				className: "flex min-w-0 items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: LOGO_SRC,
					alt: "Velan Oyster Mushroom Farm logo",
					width: 56,
					height: 56,
					className: "size-12 shrink-0 rounded-full ring-1 ring-gold/50 sm:size-14"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate font-display text-base leading-tight text-forest sm:text-lg",
						children: t("brandName")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate text-[11px] tracking-[0.18em] text-gold uppercase sm:text-xs",
						children: t("brandTagline")
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-6 lg:flex",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "text-sm text-forest/85 transition-colors hover:text-forest",
							children: t(l.key)
						}, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageToggle, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "goldOutline",
						size: "default",
						onClick: () => setOpen(true),
						"aria-label": `${t("openBasket")} — ${count}`,
						className: "relative rounded-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ShoppingBasket, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: t("order")
							}),
							count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-1.5 -right-1.5 grid size-5 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-[11px] font-bold text-forest-deep",
								children: count
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": t("toggleMenu"),
						"aria-expanded": menuOpen,
						onClick: () => setMenuOpen((v) => !v),
						className: "grid size-10 place-items-center rounded-full border border-gold/50 text-forest lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Menu, { className: "size-5" })
					})
				]
			})]
		}), menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "animate-rise border-t border-gold/25 bg-cream/95 px-4 pb-4 backdrop-blur-xl lg:hidden",
			children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: l.href,
				onClick: () => setMenuOpen(false),
				className: "block border-b border-gold/15 py-3 font-display text-forest last:border-0",
				children: t(l.key)
			}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageToggle, { className: "mt-4 w-fit" })]
		})]
	});
}
var socialLinks = [
	{
		key: "socialYouTube",
		href: "#",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			fill: "currentColor",
			className: "size-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" })
		})
	},
	{
		key: "socialFacebook",
		href: "#",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			fill: "currentColor",
			className: "size-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
		})
	},
	{
		key: "socialInstagram",
		href: "#",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			fill: "currentColor",
			className: "size-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" })
		})
	},
	{
		key: "socialTwitter",
		href: "#",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			fill: "currentColor",
			className: "size-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
		})
	}
];
function SiteFooter() {
	const { t, lang } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-[image:var(--gradient-forest)] text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-14 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: LOGO_SRC,
								alt: "Velan Oyster Mushroom Farm logo",
								loading: "lazy",
								width: 80,
								height: 80,
								className: "size-20 shrink-0 rounded-full ring-1 ring-gold/50"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-xl",
										children: t("brandName")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm tracking-[0.18em] text-gold uppercase",
										children: t("brandTagline")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-cream/70",
										children: t("footerBlurb")
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg text-gold",
							children: t("contact")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:+91${WHATSAPP_NUMBER}`,
									className: "flex items-center gap-2 hover:text-gold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Phone, { className: "size-4 text-gold" }),
										" +91 ",
										WHATSAPP_NUMBER
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: enquiryUrl(lang),
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-center gap-2 hover:text-gold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MessageCircle, { className: "size-4 text-gold" }),
										" WhatsApp ",
										WHATSAPP_NUMBER
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-start gap-2 text-cream/70",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MapPin, { className: "mt-0.5 size-4 shrink-0 text-gold" }),
										" ",
										t("location")
									]
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg text-gold",
							children: t("explore")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-2 text-sm text-cream/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#products",
									className: "hover:text-gold",
									children: t("navProducts")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#why",
									className: "hover:text-gold",
									children: t("navWhy")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#farm",
									className: "hover:text-gold",
									children: t("navFarm")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#how",
									className: "hover:text-gold",
									children: t("navHow")
								})
							]
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-divider my-8" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-display text-gold",
							children: t("followUs")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-3",
							children: socialLinks.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: s.href,
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": t(s.key),
								className: "grid size-11 place-items-center rounded-full border border-gold/40 bg-cream/10 text-cream transition-all hover:scale-110 hover:border-gold hover:bg-gold hover:text-forest-deep",
								children: s.icon
							}, s.key))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-center text-xs text-cream/60",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Velan Oyster Mushroom Farm · வேலன் சிப்பி காளான் பண்ணை"
							]
						})
					]
				})
			]
		})
	});
}
function QtyStepper({ qty, onChange, label, min = 1, size = "md" }) {
	const dim = size === "sm" ? "h-8 w-8" : "h-10 w-10";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-center gap-1 rounded-full border border-gold/50 bg-secondary/60 p-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": `Decrease quantity of ${label}`,
				onClick: () => onChange(qty - 1),
				disabled: qty <= min,
				className: `${dim} grid place-items-center rounded-full text-forest transition-colors hover:bg-gold/25 disabled:opacity-40`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Minus, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-live": "polite",
				className: `min-w-8 text-center font-display ${size === "sm" ? "text-sm" : "text-base"}`,
				children: qty
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": `Increase quantity of ${label}`,
				onClick: () => onChange(qty + 1),
				className: `${dim} grid place-items-center rounded-full text-forest transition-colors hover:bg-gold/25`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Plus, { className: "size-4" })
			})
		]
	});
}
function ProductCard({ product, onOpenDetails }) {
	const { add, setOpen } = useCart();
	const { t, pick } = useLanguage();
	const [qty, setQty] = (0, import_react.useState)(1);
	const name = pick(product.nameEn, product.nameTa);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "glass-card animate-rise group flex flex-col overflow-hidden rounded-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onOpenDetails(product),
			"aria-label": `${t("viewDetailsOf")} ${name} ${product.weight}`,
			className: "relative block overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: `${product.nameEn} ${product.weight} pack`,
				loading: "lazy",
				width: 1024,
				height: 1024,
				className: "aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-4 left-4 rounded-full bg-[image:var(--gradient-gold)] px-3 py-1 text-xs font-semibold tracking-wide text-forest-deep",
				children: product.weight
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-4 p-5 sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl text-forest sm:text-2xl",
					children: name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm tracking-wide text-muted-foreground",
					children: product.weight
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-divider" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: pick(product.blurbEn, product.blurbTa)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-end justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl text-forest",
								children: formatINR(product.price)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyStepper, {
								qty,
								onChange: setQty,
								label: `${name} ${product.weight}`
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-xl bg-secondary/70 px-4 py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: t("subtotal")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg text-forest",
								children: formatINR(product.price * qty)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "forest",
								size: "lg",
								className: "flex-1",
								onClick: () => {
									add(product, qty);
									setOpen(true);
									toast.success(`${name} ${product.weight} × ${qty} — ${t("addedToOrder")}`);
								},
								children: t("addToOrder")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "goldOutline",
								size: "lg",
								className: "flex-1",
								onClick: () => onOpenDetails(product),
								children: t("details")
							})]
						})
					]
				})
			]
		})]
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function ProductDialog({ product, onClose }) {
	const { add, setOpen } = useCart();
	const { t, pick, lang } = useLanguage();
	const [qty, setQty] = (0, import_react.useState)(1);
	(0, import_react.useEffect)(() => {
		if (product) setQty(1);
	}, [product]);
	const name = product ? pick(product.nameEn, product.nameTa) : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: !!product,
		onOpenChange: (o) => !o && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "max-h-[92vh] overflow-y-auto bg-cream sm:max-w-3xl",
			children: product && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
				className: "font-display text-2xl text-forest",
				children: [name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-sm font-normal tracking-wide text-muted-foreground",
					children: product.weight
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: `${product.nameEn} ${product.weight}`,
					loading: "lazy",
					width: 1024,
					height: 1024,
					className: "aspect-square w-full rounded-2xl object-cover ring-1 ring-gold/40"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: pick(product.blurbEn, product.blurbTa)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-divider" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Clock, { className: "mt-0.5 size-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
											className: "text-forest",
											children: [t("freshness"), ":"]
										}),
										" ",
										t("freshnessBody")
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Leaf, { className: "mt-0.5 size-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
											className: "text-forest",
											children: [t("naturallyGrown"), ":"]
										}),
										" ",
										t("naturallyGrownBody")
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Sparkles, { className: "mt-0.5 size-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
										className: "text-forest",
										children: [t("nutrition"), ":"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block space-y-1",
										children: product.nutrition.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "block text-muted-foreground",
											children: ["• ", n]
										}, n))
									})] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-divider" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl text-forest",
								children: formatINR(product.price)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyStepper, {
								qty,
								onChange: setQty,
								label: `${name} ${product.weight}`
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-xl bg-secondary/70 px-4 py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: t("total")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg text-forest",
								children: formatINR(product.price * qty)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "forest",
								size: "lg",
								onClick: () => {
									add(product, qty);
									onClose();
									setOpen(true);
									toast.success(`${name} ${product.weight} × ${qty} — ${t("addedToOrder")}`);
								},
								children: t("addToCart")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "whatsapp",
								size: "lg",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: buildWhatsAppUrl([{
										product,
										qty
									}], lang),
									target: "_blank",
									rel: "noopener noreferrer",
									children: t("orderViaWhatsApp")
								})
							})]
						})
					]
				})]
			})] })
		})
	});
}
var Sheet = Dialog$1;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle$1.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription$1.displayName;
function CartSheet() {
	const { lines, total, setQty, remove, isOpen, setOpen } = useCart();
	const { t, pick, lang } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: isOpen,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			className: "flex w-full flex-col gap-0 bg-cream sm:max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
					className: "font-display text-2xl text-forest",
					children: t("yourOrder")
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-divider my-4" }),
				lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col items-center justify-center gap-3 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ShoppingBasket, { className: "size-10 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: t("emptyBasket")
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 space-y-4 overflow-y-auto pr-1",
					children: lines.map((line) => {
						const name = pick(line.product.nameEn, line.product.nameTa);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-card grid grid-cols-[64px_minmax(0,1fr)_auto] items-center gap-3 rounded-xl p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: line.product.image,
									alt: `${line.product.nameEn} ${line.product.weight}`,
									loading: "lazy",
									width: 64,
									height: 64,
									className: "size-16 shrink-0 rounded-lg object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate font-display text-base text-forest",
											children: name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "truncate text-xs text-muted-foreground",
											children: [
												line.product.weight,
												" · ",
												formatINR(line.product.price)
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2 flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyStepper, {
												size: "sm",
												qty: line.qty,
												label: `${name} ${line.product.weight}`,
												onChange: (q) => setQty(line.product.id, q)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-display text-sm",
												children: ["= ", formatINR(line.product.price * line.qty)]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": `${t("remove")} ${name} ${line.product.weight}`,
									onClick: () => remove(line.product.id),
									className: "shrink-0 rounded-full p-2 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Trash2, { className: "size-4" })
								})
							]
						}, line.product.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-divider" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: t("total")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl text-forest",
								children: formatINR(total)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: lines.length > 0,
							variant: "whatsapp",
							size: "xl",
							className: "w-full",
							disabled: lines.length === 0,
							children: lines.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: buildWhatsAppUrl(lines, lang),
								target: "_blank",
								rel: "noopener noreferrer",
								children: t("orderViaWhatsApp")
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("orderViaWhatsApp") })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-center text-xs text-muted-foreground",
							children: [
								t("orderOnWhatsApp"),
								" · ",
								WHATSAPP_NUMBER
							]
						})
					]
				})
			]
		})
	});
}
var reasons = [
	{
		icon: import_lucide_react.Sprout,
		title: "why1",
		body: "why1Body"
	},
	{
		icon: import_lucide_react.Leaf,
		title: "why2",
		body: "why2Body"
	},
	{
		icon: import_lucide_react.ShieldCheck,
		title: "why3",
		body: "why3Body"
	},
	{
		icon: import_lucide_react.Truck,
		title: "why4",
		body: "why4Body"
	}
];
var reviews = [
	{
		name: "Kavitha R.",
		place: "Erode",
		key: "review1"
	},
	{
		name: "Sathish M.",
		place: "Coimbatore",
		key: "review2"
	},
	{
		name: "Anitha S.",
		place: "Salem",
		key: "review3"
	}
];
var steps = [
	{
		n: "01",
		key: "step1"
	},
	{
		n: "02",
		key: "step2"
	},
	{
		n: "03",
		key: "step3"
	},
	{
		n: "04",
		key: "step4"
	}
];
function HomePage() {
	const [selected, setSelected] = (0, import_react.useState)(null);
	const { t, lang } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartSheet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductDialog, {
				product: selected,
				onClose: () => setSelected(null)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-rise",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 rounded-full border border-gold/50 bg-card/70 px-4 py-1.5 text-xs tracking-[0.2em] text-forest uppercase",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Leaf, { className: "size-3.5 text-gold" }),
										" ",
										t("heroBadge")
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-6 font-display text-4xl leading-tight text-forest sm:text-5xl lg:text-6xl",
									children: [t("heroTitle"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-3 block text-2xl text-gold-gradient sm:text-3xl lg:text-4xl",
										children: t("heroSubtitle")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-divider my-6 max-w-sm" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-xl text-base text-muted-foreground",
									children: t("heroBody")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-xl text-base text-muted-foreground",
									children: t("heroBody2")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "gold",
											size: "xl",
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "#products",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ShoppingBasket, {}),
													" ",
													t("orderNow")
												]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "goldOutline",
											size: "xl",
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#products",
												children: t("viewProducts")
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "whatsapp",
											size: "xl",
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: enquiryUrl(lang),
												target: "_blank",
												rel: "noopener noreferrer",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MessageCircle, {}),
													" WhatsApp ",
													WHATSAPP_NUMBER
												]
											})
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 rounded-[2.5rem] bg-[image:var(--gradient-gold)] opacity-25 blur-2xl" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: hero_mushroom_default,
									alt: "Fresh cluster of white oyster mushrooms on a wooden stump at Velan farm",
									width: 1600,
									height: 1200,
									className: "relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)] ring-1 ring-gold/40"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "glass-card animate-float absolute -bottom-6 left-4 rounded-2xl px-5 py-3 sm:left-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-widest text-muted-foreground uppercase",
										children: t("from")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-2xl text-forest",
										children: [formatINR(70), " / 200g"]
									})]
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "products",
					className: "mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "eyebrowProducts",
						title: "productsTitle",
						sub: "productsSub"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-8 md:grid-cols-2",
						children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
							product: p,
							onOpenDetails: setSelected
						}, p.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "why",
					className: "bg-secondary/50 py-16 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-4 lg:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "eyebrowWhy",
							title: "whyTitle",
							sub: "whySub"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
							children: reasons.map(({ icon: Icon, title: ttl, body }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-card rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-12 place-items-center rounded-xl bg-[image:var(--gradient-gold)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-forest-deep" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-display text-lg text-forest",
										children: t(ttl)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted-foreground",
										children: t(body)
									})
								]
							}, ttl))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "farm",
					className: "mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: farm_default,
							alt: "Rows of oyster mushroom grow bags inside the Velan farm shed",
							loading: "lazy",
							width: 1600,
							height: 1200,
							className: "aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)] ring-1 ring-gold/40"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
								align: "left",
								eyebrow: "eyebrowFarm",
								title: "farmTitle",
								sub: "farmSub"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-base text-muted-foreground",
								children: t("farmBody1")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base text-muted-foreground",
								children: t("farmBody2")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-8 grid grid-cols-3 gap-4",
								children: [
									["100%", "statNatural"],
									["0", "statChemicals"],
									["24h", "statHarvest"]
								].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-gold/40 bg-card/70 p-4 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-display text-2xl text-forest",
										children: k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 text-[11px] tracking-wider text-muted-foreground uppercase",
										children: t(v)
									})]
								}, v))
							})
						] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "how",
					className: "bg-[image:var(--gradient-forest)] py-16 text-cream lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-4 lg:px-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-xs tracking-[0.3em] text-gold uppercase",
								children: t("eyebrowHow")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-center font-display text-3xl sm:text-4xl",
								children: t("howTitle")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-divider mx-auto mt-6 max-w-xs" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
								children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-2xl border border-gold/30 bg-cream/5 p-6 backdrop-blur-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-3xl text-gold",
										children: s.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-cream/80",
										children: t(s.key)
									})]
								}, s.n))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "reviews",
					className: "mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "eyebrowReviews",
						title: "reviewsTitle",
						sub: "reviewsSub"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-3",
						children: reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "glass-card rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-1 text-gold",
									children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Star, { className: "size-4 fill-current" }, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-muted-foreground",
									children: t(r.key)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
									className: "mt-5 font-display text-base text-forest",
									children: [r.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs tracking-wider text-muted-foreground uppercase",
										children: r.place
									})]
								})
							]
						}, r.name))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "contact",
					className: "mx-auto max-w-4xl px-4 pb-24 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card rounded-[2rem] p-8 text-center sm:p-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
								eyebrow: "eyebrowContact",
								title: "contactTitle",
								sub: "contactSub"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-base text-muted-foreground",
								children: t("contactBody")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "whatsapp",
									size: "xl",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: enquiryUrl(lang),
										target: "_blank",
										rel: "noopener noreferrer",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MessageCircle, {}),
											" WhatsApp ",
											WHATSAPP_NUMBER
										]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "goldOutline",
									size: "xl",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:+91${WHATSAPP_NUMBER}`,
										children: [
											t("call"),
											" +91 ",
											WHATSAPP_NUMBER
										]
									})
								})]
							})
						]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingBar, {})
		]
	});
}
function SectionHeading({ eyebrow, title: titleKey, sub, align = "center" }) {
	const { t } = useLanguage();
	const isCenter = align === "center";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: isCenter ? "text-center" : "",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.3em] text-gold uppercase",
				children: t(eyebrow)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl text-forest sm:text-4xl",
				children: t(titleKey)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-base text-muted-foreground",
				children: t(sub)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `gold-divider mt-6 max-w-xs ${isCenter ? "mx-auto" : ""}` })
		]
	});
}
function FloatingBar() {
	const { count, total, setOpen } = useCart();
	const { t, lang } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: enquiryUrl(lang),
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": t("chatWhatsApp"),
		className: "fixed right-4 bottom-24 z-40 grid size-14 place-items-center rounded-full bg-[oklch(0.62_0.15_150)] text-cream shadow-[var(--shadow-soft)] transition-transform hover:scale-110 sm:bottom-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MessageCircle, { className: "size-6" })
	}), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "animate-rise fixed inset-x-3 bottom-3 z-40 sm:right-24 sm:left-auto sm:w-80",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen(true),
			className: "glass-card flex w-full items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "block truncate text-xs tracking-widest text-muted-foreground uppercase",
					children: [
						count,
						" ",
						count > 1 ? t("items") : t("item"),
						" · ",
						t("viewOrder")
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-display text-xl text-forest",
					children: formatINR(total)
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ShoppingBasket, { className: "size-5 shrink-0 text-gold" })]
		})
	})] });
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {}) }) });
//#endregion
export { SplitComponent as component };

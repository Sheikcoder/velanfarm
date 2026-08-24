//#region node_modules/.nitro/vite/services/ssr/assets/shop-DmKqM6AS.js
var product_200g_default = "/assets/product-200g-BLNlHCU7.jpg";
var product_1kg_default = "/assets/product-1kg-izyqfmFS.jpg";
var WHATSAPP_NUMBER = "9342078848";
/** Served from /public so Vercel does not depend on Lovable /__l5e/ asset URLs. */
var LOGO_SRC = "/velan-logo.png";
var products = [{
	id: "oyster-200g",
	nameTa: "புதிய சிப்பி காளான் (200g)",
	nameEn: "Fresh Oyster Mushroom (200g)",
	weight: "200g",
	price: 70,
	image: product_200g_default,
	blurbTa: "காலையில் அறுவடை செய்யப்பட்ட புதிய சிப்பி காளான் — சிறு குடும்பங்களுக்கு ஏற்றது.",
	blurbEn: "Harvested the same morning and hygienically packed — perfect for a small family meal.",
	nutrition: [
		"Rich in plant protein (approx. 3g per 100g)",
		"Good source of Vitamin B & D",
		"Low in calories, zero cholesterol",
		"Naturally high in dietary fibre"
	]
}, {
	id: "oyster-1kg",
	nameTa: "புதிய சிப்பி காளான் (1kg)",
	nameEn: "Fresh Oyster Mushroom (1kg)",
	weight: "1kg",
	price: 350,
	image: product_1kg_default,
	blurbTa: "குடும்ப அளவு பெட்டி — உணவகங்கள் மற்றும் நிகழ்ச்சிகளுக்கும் ஏற்றது.",
	blurbEn: "Family-size crate, also loved by restaurants and caterers who need volume freshness.",
	nutrition: [
		"Rich in plant protein (approx. 3g per 100g)",
		"Antioxidants & natural ergothioneine",
		"Low in calories, zero cholesterol",
		"Naturally high in dietary fibre"
	]
}];
var formatINR = (n) => `₹${n.toLocaleString("en-IN")}`;
function buildWhatsAppUrl(lines, lang = "en") {
	const total = lines.reduce((s, l) => s + l.product.price * l.qty, 0);
	const ta = lang === "ta";
	const body = lines.map((l) => ta ? `பொருள்: ${l.product.nameTa}\nஅளவு: ${l.product.weight} × ${l.qty}\nதொகை: ₹${l.product.price * l.qty}` : `Product: ${l.product.nameEn}\nQuantity: ${l.product.weight} × ${l.qty}\nSubtotal: ₹${l.product.price * l.qty}`).join("\n\n");
	const message = ta ? `வணக்கம் வேலன் சிப்பி காளான் பண்ணை,\n\nநான் ஆர்டர் செய்ய விரும்புகிறேன்:\n\n${body}\n\nமொத்த தொகை: ₹${total}\n\nஎன் ஆர்டரை உறுதி செய்யுங்கள்.` : `Hello Velan Oyster Mushroom Farm,\n\nI would like to place an order:\n\n${body}\n\nTotal Amount: ₹${total}\n\nPlease confirm my order.`;
	return `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
var enquiryUrl = (lang = "en") => `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(lang === "ta" ? "வணக்கம் வேலன் சிப்பி காளான் பண்ணை, உங்கள் புதிய சிப்பி காளான் பற்றி மேலும் அறிய விரும்புகிறேன்." : "Hello Velan Oyster Mushroom Farm, I would like to know more about your fresh oyster mushrooms.")}`;
enquiryUrl("en");
//#endregion
export { formatINR as a, enquiryUrl as i, WHATSAPP_NUMBER as n, products as o, buildWhatsAppUrl as r, LOGO_SRC as t };

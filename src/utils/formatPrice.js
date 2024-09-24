export function formatPrice(price) {
	const formatter = Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "BDT",
	}).format(price);
	return formatter;
}

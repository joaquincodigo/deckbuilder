import Image from "next/image";

export default function LowResCardPlaceholder() {
	return (
		<Image
			data-component="LowResCardPlaceholder"
			sizes="100%"
			src="/ui/card-back-low-res.webp" // TODO Compress the fuck-up of this img
			alt="Loading card placeholder..."
			className="absolute top-0 left-0"
			fill
			style={{ objectFit: "fill" }}
		/>
	);
}
import Image from "next/image";

export default function LowResCardImage({ card, setIsCardLoading }) {

	if (!card) return null

	return (
		<Image
			className="w-full h-full"
			sizes="100%"
			src={`/card_images/lowres/${card.id}.webp`}
			alt={card.name || "Loading card image..."}
			onLoad={() => setIsCardLoading(false)}
			fill
			style={{ objectFit: "fill" }}
		/>
	);
}

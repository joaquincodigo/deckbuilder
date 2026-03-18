import Image from "next/image";

export default function LowResCardImage({ card, setIsCardLoading }) {
  if (!card) return null;

  // only call if provided
  function handleLoad() {
    if (typeof setIsCardLoading === "function") {
      setIsCardLoading(false);
    }
  }

  return (
    <Image
      onLoad={handleLoad}
      className="w-full aspect-[59/86]"
      sizes="100%"
      src={`/card_images/lowres/${card.id}.webp`}
      alt={card.name || "Loading card image..."}
      fill
      style={{ objectFit: "fill" }}
    />
  );
}

import Image from "next/image";

export default function LowResCardImage({ card, setCardIsLoading }) {
  if (!card) return null;

  // only call if provided
  function handleLoad() {
    if (typeof setCardIsLoading === "function") {
      setCardIsLoading(false);
    }
  }

  return (
    <Image
      onLoad={handleLoad} // safe handler
      className="w-full aspect-[59/86]"
      sizes="100%"
      src={`/card_images/lowres/${card.id}.webp`}
      alt={card.name || "Loading card image..."}
      fill
      style={{ objectFit: "fill" }}
    />
  );
}

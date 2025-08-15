import Image from "next/image";
import { forwardRef } from "react";

const Card = forwardRef(function Card(
  { name, atk, def, ability, onClick },
  ref
) {
  const styles = {
    body: "aspect-[59/86] p-1 bg-white w-full",
    stats: "font-bold",
    name: "font-bold truncate",
    ability: "text-xs leading-tight overflow-hidden line-clamp-2",
  };

  return (
    <div ref={ref} onClick={onClick} className={styles.body}>
      <div className={styles.stats}>{`${atk}/${def}`}</div>
      <Image
        src="/dummy-image.jpg"
        alt="dummy card image"
        width={300}
        height={300}
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.ability}>{ability}</p>
    </div>
  );
});

export default Card;

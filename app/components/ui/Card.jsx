import Image from "next/image";

export default function Card({ card }) {
  const styles = {
    body: "p-1 bg-white h-full w-full overflow-hidden",
  };

  return (
    <div className={styles.body}>
      <Image
        src={card.imageUrl}
        alt="dummy card image"
        width={150}
        height={150}
      />
    </div>
  );
}

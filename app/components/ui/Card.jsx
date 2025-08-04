import Image from "next/image";

export default function Card({ atk, def }) {
  const styles = {
    // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING
    body: "aspect-[4/6] p-1 bg-white w-full h-full",
    // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING
    stats: "font-bold",
    text: "text-xs leading-tight"
  };

  return (
    <div className={styles.body}>
      <div className={styles.stats}>
        {`${atk}/${def}`}
      </div>
      <Image
        src="/dummy-image.jpg"
        alt="dummy card image"
        width={300}
        height={300}
      />
      <p className={styles.text}>Lorem ipsum sit, amet consectetur.</p>
    </div>
  );
}

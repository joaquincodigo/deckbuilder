import Image from "next/image";

export default function Card({ width }) {
  const styles = {
    bodyWidth: { width: `${width}px` },
    body: "aspect-[4/6] p-1 bg-white",
    stats: "font-bold",
  };

  return (
    <div className={styles.body} style={styles.bodyWidth}>
      <div className={styles.stats}>2/2</div>
			<Image src="/dummy-image.jpg" width={100} height={100}/> 
    </div>
  );
}

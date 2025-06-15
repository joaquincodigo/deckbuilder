"use client";

export default function SearchPanel() {
  const styles = {
    container: "bg-blue-200",
    resizeHandler: "bg-blue-800 text-white h-18",
  };

  return (
    <div className={styles.container}>
      <div className={styles.resizeHandler}>I am resize handler</div>I am search
      container
    </div>
  );
}

export default function EdgeIndicator() {
  const styles = {
    body: "flex flex-row items-center h-screen w-6 bg-blue-500",
    text: "transform -rotate-90 origin-top-left whitespace-nowrap font-bold text-white",
  };

  return (
    <div className={styles.body}>
      <p className={styles.text}>All cards</p>
    </div>
  );
}

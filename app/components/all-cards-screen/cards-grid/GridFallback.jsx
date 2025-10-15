export default function GridFallback() {
  const styles = {
    fallback: "flex w-full h-full justify-center items-center",
  };
  return <div className={styles.fallback}>Loading cards...</div>;
}

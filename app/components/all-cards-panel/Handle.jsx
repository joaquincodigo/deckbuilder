export default function Handle() {
  const styles = {
    handle: "absolute bg-blue-500 text-white z-40 w-12 h-full fixed top-0 left-0",
  };

  return <div className={styles.handle}>{"<<"}</div>;
}

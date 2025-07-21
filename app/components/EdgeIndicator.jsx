export default function EdgeIndicator() {
  const styles = {
    body: "flex flex-row items-center h-screen w-6 bg-blue-400",
    text: "transform -rotate-90 origin-top-left bg-green-400",
  };

  return (
    <div className={styles.body}>
      <div className={styles.text}>EdgeIndicator</div>
    </div>
  );
}

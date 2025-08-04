export default function LeftArrowIcon() {
  const styles = {
    svg: "text-white w-7 h-7", // DECREASE SIZE
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={styles.svg}
    >
      <path d="M8 12L14 6V18L8 12Z"></path>
    </svg>
  );
}

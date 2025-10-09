export default function RightArrowIcon() {
  const styles = {
    svg: "text-black/70 w-7 h-7", // DECREASE SIZE
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
			className={styles.svg}
    >
      <path d="M16 12L10 18V6L16 12Z"></path>
    </svg>
  );
}

export default function CardSelectorButton({ children, onClick }) {
  const styles = {
    CardSelectorButton:
      "w-full h-full flex flex-col items-center justify-center bg-btn-bg border-btn-border border-2 text-white transform transition duration-150 ease-in-out active:scale-90 ",
  };

  return (
    <button
      data-component="CardSelectorButton"
      className={styles.CardSelectorButton}
      onMouseDown={onClick}
    >
      {children}
    </button>
  );
}

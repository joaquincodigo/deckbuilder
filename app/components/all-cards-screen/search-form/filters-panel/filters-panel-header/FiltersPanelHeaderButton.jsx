export default function FiltersPanelHeaderButton({ onClick }) {
  const styles = {
    FiltersPanelHeaderButton:
      "bg-btn-bg border-1 border-btn-border aspect-square w-14 h-14 flex justify-center items-center",
  };

  return (
    <button
      data-component="FiltersPanelHeaderButton"
      className={styles.FiltersPanelHeaderButton}
      onMouseDown={onClick}
    >
      X
    </button>
  );
}

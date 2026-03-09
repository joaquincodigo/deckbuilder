import Image from "next/image";

export default function FiltersPanelHeaderButton({
  label,
  imgSrc,
  onClick,
  isSelected,
}) {
  const styles = {
    wrapper: "flex flex-col w-14",
    btn: `w-full aspect-[59/86] relative outline outline-btn-border transition-[width,height] duration-75 active:scale-95 ${
      isSelected ? "outline-4" : "outline-1"
    }`,
    label: "flex justify-center",
  };

  return (
    <div className={styles.wrapper} data-component="FiltersPanelheaderButton">
      <button
        type="button"
        data-component="FiltersPanelHeaderButton"
        onMouseDown={onClick}
        className={styles.btn}
      >
        <Image
          src={imgSrc}
          alt="Section button"
          fill
          sizes="100vw"
          style={{ objectFit: "contain" }}
          className={styles.btn}
        />
      </button>

      <span className={styles.label}>{label}</span>
    </div>
  );
}

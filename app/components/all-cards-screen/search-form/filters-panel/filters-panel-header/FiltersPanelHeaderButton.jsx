import Image from "next/image";

export default function FiltersPanelHeaderButton({ onClick, imgSrc, label }) {
  const styles = {
    wrapper: "flex flex-col w-14",
    btn: "w-full aspect-[59/86] relative outline outline-1 outline-btn-border transition-[width,height] duration-150 active:scale-95",
    label: "flex justify-center",
  };

  return (
    <div className={styles.wrapper} data-component="FiltersPanelheaderButton">
      <button
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

// icon: "w-7 h-7  active:stroke-sky-200",

export default function DarkOverlay() {
  const styles = {
    darkOverlay: "bg-black/50 z-30 w-full h-full fixed top-0 left-0 text-white",
  };

  return (  
  <div className={styles.darkOverlay}>
    I am black overlay
  </div>
)
}

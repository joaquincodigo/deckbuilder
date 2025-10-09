export default function AllCardsScreen({ currentScreen }) {
  const styles = {
    container: `w-full h-full bg-blue-500 absolute inset-0 overflow-auto ${
      currentScreen === "AllCardsScreen"
        ? "opacity-100 visible"
        : "opacity-0 invisible"
    }`,
  };

  const items = Array.from({ length: 100 }, (_, i) => i);

  return (
    <div data-component="AllCardsScreen" className={styles.container}>
      I am all cards screen
      {items.map((i) => (
        <div
          key={i}
          className="h-[90px] flex items-center mb-3 bg-green-300 mx-3 ps-3 text-lg rounded-md"
        >
          Element {i}
        </div>
      ))}
    </div>
  );
}

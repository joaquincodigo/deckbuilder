export default function DeckListItem({ deck }) {
  const styles = {
    DeckListItem: "h-12 border",
  };

  return (
    <li className={styles.DeckListItem} key={deck.name + "premade"}>
      {deck.name}
    </li>
  );
}

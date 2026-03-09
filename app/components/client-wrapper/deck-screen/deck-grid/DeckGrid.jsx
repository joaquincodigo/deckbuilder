import DeckCell from "./DeckCell"

export default function DeckGrid({ deck }) {

	const styles = {
		DeckGrid: "relative w-full h-full px-2 grid grid-cols-3", // TODO change cols amount per device size
	}
	return (
		<div data-component="DeckGrid" className={styles.DeckGrid}>
			{deck.cards.map(c => (
				<DeckCell key={c.id} card={c} />
			))}
		</div>
	);

}
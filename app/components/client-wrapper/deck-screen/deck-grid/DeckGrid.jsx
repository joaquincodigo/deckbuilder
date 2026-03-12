import DeckCell from "./DeckCell"

export default function DeckGrid({ deck }) {

	const styles = {
		DeckGrid: "overflow-y-auto w-full flex-1 grid grid-cols-3 bg-amber-800", // TODO change cols amount per device size
	}
	return (
		<div data-component="DeckGrid" className={styles.DeckGrid}>
			{deck.cards.map(c => (
				<DeckCell key={c.id} card={c} />
			))}
		</div>
	);

}
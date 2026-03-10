import DeckCell from "./DeckCell"

export default function DeckGrid({ deck }) {

	const styles = {
		DeckGrid: "fixed top-16 bottom-16 overflow-y-auto w-full h-full grid grid-cols-3 px-2", // TODO change cols amount per device size
	}
	return (
		<div data-component="DeckGrid" className={styles.DeckGrid}>
			{deck.cards.map(c => (
				<DeckCell key={c.id} card={c} />
			))}
		</div>
	);

}
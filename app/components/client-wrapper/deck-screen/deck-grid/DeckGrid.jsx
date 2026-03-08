import { useEffect } from "react";
import DeckCell from "./DeckCell"

export default function DeckGrid({ deck }) {

	const styles = {
		DeckGrid: "w-full bg-pink-100 grid grid-cols-3", // TODO change cols amount per device size
	}

	// useEffect(() => {
	// 	console.log("deck is:", deck);
	// }, [deck]);

	return (
		<div data-component="DeckGrid" className={styles.DeckGrid}>
			{deck.cards.map(c => (
				<DeckCell key={c.id} card={c} />
			))}
		</div>
	);

}
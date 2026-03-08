import { useState } from "react";
import LowResCardImage from "../../../ui/LowResCardImage";
import LowResCardPlaceholder from "../../../ui/LowResCardPlaceholder"

export default function DeckCell({ card }) {

	const [isCardLoading, setIsCardLoading] = useState(true);

	const styles = {
		DeckCell: "relative aspect-[59/86]"
	}

	return (
		<div data-component="DeckCell" className={styles.DeckCell}>
			{isCardLoading && <LowResCardPlaceholder />}
			<LowResCardImage card={card} setIsCardLoading={setIsCardLoading} />
		</div>
	);

}





//   return (
//     <div
//       data-component="CardCell"
//       style={style}
//       className="w-6 h-8 relative bg-black"
//       onClick={() => setSelectedCard(card)}
//     >
//       {isCardLoading && <LowResCardPlaceholder />}
//       <LowResCardImage card={card} setIsCardLoading={setIsCardLoading} />

//       {selectedCard.id === card.id && <CardSelector card={card} />}
//     </div>
//   );
// }
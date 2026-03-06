// import { useScreen } from "@/app/context/ScreenContext";

// export default function DeckScreen({ deck }) {
//   const { currentScreen } = useScreen();

//   const styles = {
//     container: `w-full h-full bg-amber-500 absolute inset-0 p-2  ${
//       currentScreen === "DeckScreen"
//         ? "opacity-100 visible"
//         : "opacity-0 invisible"
//     }`,
//   };

//   return (
//     <div data-component="DeckScreen" className={styles.container}>
//       <p>{deck?.name}</p>
//       <ul>
//         {deck?.cards.map((card) => (
//           <li key={card.id}>{card.id}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default function DeckScreen({ allDecks, deck, screen }) {
  const styles = {
    DeckScreen: `bg-orange-500 overflow-y-auto ${
      screen === "deck" ? "opacity-100 visible h-full w-full" : "opacity-0 invisible h-0 w-0"
    }`,
  };

  return (
    <div className={styles.DeckScreen}>
      <h2>Decks are:</h2>
      <ul className="text-black">
        {allDecks.map((d) => (
          <li key={d.name}>{d.name}</li>
        ))}
      </ul>
    </div>
  );
}

import CategorySelector from "./CategorySelector";
import LevelSelector from "./LevelSelector";
import TypeSelector from "./TypeSelector";
import AttackInput from "./AttackInput";
import DefenseInput from "./DefenseInput";
import AttributeSelector from "./AttributeSelector";

export default function FilterMonsterSection() {
  const styles = {
    FilterMonsterSection: "px-6",
    inputRow: "flex items-center mb-3",
  };

  return (
    <div
      data-component="FilterMonsterSection"
      className={styles.FilterMonsterSection}
    >
      <div className={styles.inputRow}>
        <CategorySelector />
      </div>

      <div className={styles.inputRow}>
        <AttributeSelector />
      </div>

      <div className={styles.inputRow}>
        <LevelSelector />
      </div>

      <div className={styles.inputRow}>
        <TypeSelector />
      </div>

      <div className={styles.inputRow}>
        <AttackInput />
      </div>

      <div className={styles.inputRow}>
        <DefenseInput />
      </div>
    </div>
  );
}

// export default function FiltersPanel({
//   isFiltersPanelOpen,
//   toggleFiltersPanel,
// }) {
//   const styles = {
//     panel: `fixed top-14 left-2 right-2 overflow-hidden bg-blue-500 text-white text-lg transition-all ease-in-out duration-200 shadow-lg ${
//       isFiltersPanelOpen ? "h-42 py-2" : "h-0"
//     }`,
//     panelRow: "mb-3",
//     atkInput: "border-btn-border h-8 w-12 text-center text-red-500",
//   };

//   return (
//     <div data-component="FiltersPanel" className={styles.panel}>
//       {/* LEVEL */}

//       {/* DEF */}
//       <div className={styles.panelRow}>
//         <label htmlFor="def">DEF</label>
//         <input
//           className={styles.atkInput}
//           id="def"
//           type="number"
//           min="1"
//           max="9999"
//           step="1"
//         />
//       </div>
//     </div>
//   );

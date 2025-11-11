import CategorySelector from "./CategorySelector";
import LevelSelector from "./LevelSelector";
import TypeSelector from "./TypeSelector";
import AttackInput from "./AttackInput";
import DefenseInput from "./DefenseInput";
import AttributeSelector from "./AttributeSelector";

export default function FilterMonsterSection() {
  const styles = {
    FilterMonsterSection:
      "grid grid-cols-12 auto-rows-[2rem] gap-y-4",
  };

  return (
    <div
      data-component="FilterMonsterSection"
      className={styles.FilterMonsterSection}
    >
      <CategorySelector />

      <AttributeSelector />

      <LevelSelector />

      <TypeSelector />

      <AttackInput />

      <DefenseInput />
    </div>
  );
}

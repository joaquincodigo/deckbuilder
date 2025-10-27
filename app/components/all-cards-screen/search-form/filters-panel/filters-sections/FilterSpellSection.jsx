export default function FilterSpellSection() {
  const styles = {
    FilterSpellSection: "px-6",
    spellTypeSelector: "bg-white border-btn-border h-8 px-2",
  };

  const spellTypes = [
    "Normal",
    "Continuous",
    "Equip",
    "Quick-Play",
    "Field",
    "Ritual",
  ];

  return (
    // <div
    //   data-component="FilterSpellSection"
    //   className={styles.FilterSpellSection}
    // >
    //   <label htmlFor="spell-type">Spell type</label>
    //   <select
    //     id="spell-type"
    //     defaultValue="any"
    //     className={styles.spellTypeSelector}
    //   >
    //     {spellTypes.map((type) => (
    //       <option key={type} value={type}>
    //         {type === "any" ? "Any" : type}
    //       </option>
    //     ))}
    //   </select>
    // </div>

    <form class="grid grid-cols-2 gap-y-2 items-center w-64 mx-auto">
      <label class="text-left">Category</label>
      <select class="w-full border px-2 py-1">
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
      </select>

      <label class="text-left">Attribute</label>
      <select class="w-full border px-2 py-1">
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
      </select>

      <label class="text-left">Level</label>
      <select class="w-full border px-2 py-1">
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
      </select>

      <label class="text-left">ATK</label>
      <select class="w-full border px-2 py-1">
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
      </select>

      <label class="text-left">DEF</label>
      <select class="w-full border px-2 py-1">
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
        <option>Hello</option>
      </select>
    </form>
  );
}

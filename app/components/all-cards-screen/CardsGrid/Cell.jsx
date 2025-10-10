export default function Cell({ columnIndex, rowIndex, style }) {
  const styles = {
    cell: "bg-green-300 w-6 h-8",
  };

  return (
    <div data-component="GridCell" style={style} className={styles.cell} >
      R{rowIndex}
      C{columnIndex}
    </div>
  );
}

import Button from "@/app/components/ui/Button";

export default function showInfoButton({ onClick }) {
  const styles = {
    button: "bg-blue-500 font-bold rounded text-white",
  };

  return (
    <>
      <Button onClick={onClick} className={styles.button}>
        View card info
      </Button>
    </>
  );
}

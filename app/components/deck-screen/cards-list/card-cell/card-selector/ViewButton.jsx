import { useState } from "react";
import Button from "@/app/components/ui/Button";
import CardModal from "@/app/components/modals/CardModal";

export default function ViewButton({ card }) {
  const [isCardModalVisible, setIsCardModalVisible] = useState(false);

  const showCardModal = () => setIsCardModalVisible(true);

  const styles = {
    button: "bg-blue-500 font-bold rounded text-white",
  };

  return (
    <>
      <Button onClick={showCardModal} className={styles.button}>
        View card info
      </Button>
      {isCardModalVisible && <CardModal card={card} />}
    </>
  );
}

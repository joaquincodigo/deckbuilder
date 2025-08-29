import Modal from "./Modal";
import Card from "../ui/Card";

export default function CardModal({ card }) {
  const styles = {
    body: "bg-white z-90",
  };

  return (
    <Modal>
      <Card
        name={card.name}
        atk={card.atk}
        def={card.def}
        ability={card.ability}
      />
    </Modal>
  );
}

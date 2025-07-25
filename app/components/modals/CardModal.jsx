import Modal from "@/app/components/modals/Modal";

export default function CardModal() {
  return (
    <Modal>
      <div>I am card modal text.</div>
      <button className="bg-blue-500 py-1 px-2 text-white rounded">Click Me</button>
    </Modal>
  );
}

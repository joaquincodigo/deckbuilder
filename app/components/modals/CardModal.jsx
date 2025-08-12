import Modal from "./Modal";

export default function CardModal({card}) {
	const styles = {
		body: "bg-white "
	}
	return (
		<Modal>
			<div className={styles.body}>
			Im card modal
			</div>
		</Modal>
	);
}
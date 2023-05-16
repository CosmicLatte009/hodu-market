import styles from "../../styles/sections/PaymentSection/PaymentMethod.module.scss";

const PaymentMethod: React.FC = () => {
	return (
		<div className={styles["payment-method"]}>
			<h2>결제 수단</h2>
			<span>
				<input className={styles.check} id="my-checkbox" type="checkbox" />
				<label className={styles["check-label"]} htmlFor="my-checkbox"></label>
				<p>신용/체크카드</p>
			</span>
			<span>
				<input className={styles.check} id="my-checkbox" type="checkbox" />
				<label className={styles["check-label"]} htmlFor="my-checkbox"></label>
				<p>무통장 입금</p>
			</span>
			<span>
				<input className={styles.check} id="my-checkbox" type="checkbox" />
				<label className={styles["check-label"]} htmlFor="my-checkbox"></label>
				<p>네이버페이</p>
			</span>
			<span>
				<input className={styles.check} id="my-checkbox" type="checkbox" />
				<label className={styles["check-label"]} htmlFor="my-checkbox"></label>
				<p>카카오페이</p>
			</span>
		</div>
	);
};

export default PaymentMethod;

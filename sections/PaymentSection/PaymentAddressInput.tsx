import styles from "../../styles/sections/PaymentSection/PaymentAddressInput.module.scss";

const PaymentAddressInput: React.FC = () => {
	return (
		<div className={styles.wrap}>
			<label htmlFor="zip-code address detailed-address inquery-btn">
				배송주소
			</label>
			<input type="text" id="zip-code" />
			<button className={styles.btn} type="button" id="inqury-btn">
				우편번호 조회
			</button>
			<input type="text" id="address" />
			<input type="text" id="detailed-address" />
		</div>
	);
};

export default PaymentAddressInput;

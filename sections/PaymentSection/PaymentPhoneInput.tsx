import styles from "../../styles/sections/PaymentSection/PaymentPhoneInput.module.scss";

const PaymentPhoneInput: React.FC = () => {
	return (
		<div className={styles.wrap}>
			<label htmlFor="phone1 phone2 phone3">휴대폰</label>
			<input type="tel" maxLength={3} id="phone1" />
			-
			<input type="tel" maxLength={4} id="phone2" />
			-
			<input type="tel" maxLength={4} id="phone3" />
		</div>
	);
};

export default PaymentPhoneInput;

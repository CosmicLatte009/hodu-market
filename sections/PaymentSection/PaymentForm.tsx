import styles from "../../styles/sections/PaymentSection/PaymentForm.module.scss";
import PaymentShippingInfo from "./PaymentShippingInfo";
import PaymentMethod from "./PaymentMethod";
import PaymentFinalPayment from "./PaymentFinalPayment";

const PaymentForm: React.FC = () => {
	return (
		<form className={styles["form-wrap"]}>
			<PaymentShippingInfo />
			<div>
				<PaymentMethod />
				<PaymentFinalPayment />
			</div>
		</form>
	);
};

export default PaymentForm;

import styles from "../../styles/sections/PaymentSection/PaymentShippingInfo.module.scss";
import PaymentInput from "@/sections/PaymentSection/PaymentInput";
import PaymentAddressInput from "./PaymentAddressInput";
import PaymentPhoneInput from "./PaymentPhoneInput";

const PaymentShippingInfo: React.FC = () => {
	return (
		<div className={styles["shipping-info"]}>
			<h2>배송정보</h2>
			<div>
				<strong>주문자 정보</strong>
				<PaymentInput type="text" labelID="orderer-name" size="medium">
					이름
				</PaymentInput>
				<PaymentPhoneInput />
				<PaymentInput type="email" labelID="email" size="medium">
					이메일
				</PaymentInput>
			</div>
			<div>
				<strong>배송지 정보</strong>
				<PaymentInput type="text" labelID="recipient-name" size="medium">
					수령인
				</PaymentInput>
				<PaymentPhoneInput />
				<PaymentAddressInput />
				<PaymentInput type="text" labelID="message" size="large">
					배송 메시지
				</PaymentInput>
			</div>
		</div>
	);
};

export default PaymentShippingInfo;

import styles from "../../styles/sections/PaymentSection/PaymentFinalPayment.module.scss";
import PriceText from "@/components/PriceText/PriceText";
import CheckText from "@/components/Etc/CheckText";
import Button from "@/components/Button/Button";

const PaymentFinalPayment: React.FC = () => {
	return (
		<div className={styles["final-payment"]}>
			<h2>최종결제 정보</h2>
			<div className={styles["final-payment-box"]}>
				<div className={styles["final-payment-info"]}>
					<div>
						<span>- 상품금액</span>
						<PriceText size="small" unit="on" unitSize="s">
							46,500
						</PriceText>
					</div>
					<div>
						<span>- 할인금액</span>
						<PriceText size="small" unit="on" unitSize="s">
							0
						</PriceText>
					</div>
					<div>
						<span>- 배송비</span>
						<PriceText size="small" unit="on" unitSize="s">
							0
						</PriceText>
					</div>
					<hr />
					<div className={styles["pay-price"]}>
						<span>- 결제금액</span>
						<PriceText size="medium" unit="on" unitSize="l">
							46,500
						</PriceText>
					</div>
				</div>
				<div className={styles["final-payment-check-wrap"]}>
					<CheckText>
						주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
					</CheckText>
					<Button size="large" theme="disabled">
						결제하기
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PaymentFinalPayment;

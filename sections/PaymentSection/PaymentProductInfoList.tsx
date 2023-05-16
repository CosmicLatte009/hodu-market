import styles from "../../styles/sections/PaymentSection/PaymentProductInfoList.module.scss";
import ProductInformation from "@/components/Contents/ProductInformation";

const PaymentProductInfoList: React.FC = () => {
	return (
		<>
			<div className={styles.nav}>
				<span>상품정보</span>
				<span>할인</span>
				<span>수량</span>
				<span>상품금액</span>
			</div>
			<div className={styles["product-info-list"]}>
				<ProductInformation />
				<ProductInformation />
			</div>
			<span className={styles["total-price"]}>
				총 주문금액<strong>46,500원</strong>
			</span>
		</>
	);
};

export default PaymentProductInfoList;

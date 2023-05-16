import styles from "../../styles/sections/ShoppingCartSection/ShoppingCartPrice.module.scss";
import Image from "next/image";
import PriceGroup from "@/components/PriceText/PriceGroup";

const ShoppingCartPrice: React.FC = () => {
	return (
		<div className={styles["cart-price"]}>
			<PriceGroup label="총 상품 금액" size="medium">
				46,500
			</PriceGroup>
			<Image
				src="/assets/icon-minus-ellipse.svg"
				alt="빼기 기호"
				width={34}
				height={34}
			/>
			<PriceGroup label="상품 할인" size="medium">
				0
			</PriceGroup>
			<Image
				src="/assets/icon-plus-ellipse.svg"
				alt="더하기 기호"
				width={34}
				height={34}
			/>
			<PriceGroup label="배송비" size="medium">
				0
			</PriceGroup>
			<PriceGroup label="결제 예정 금액" size="large">
				46,500
			</PriceGroup>
		</div>
	);
};

export default ShoppingCartPrice;

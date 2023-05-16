import styles from "../../styles/sections/ProductDetailsSection/ProductDetailsMain.module.scss";
import Image from "next/image";
import Amount from "@/components/Etc/Amount";
import ProductDetailsButton from "./ProductDetailsButton";
import PriceText from "@/components/PriceText/PriceText";

const ProductDetailsMain: React.FC = () => {
	return (
		<main className={styles["product-wrap"]}>
			<Image
				src="/assets/dummy-image.png"
				alt="상품 이미지"
				width={600}
				height={600}
			/>
			<div className={styles["product-info-wrap"]}>
				<div className={styles.info}>
					<p className={styles.seller}>백엔드글로벌</p>
					<strong className={styles.title}>딥러닝 개발자 무릎 담요</strong>
					<PriceText size="large" unit="on" unitSize="s">
						17,500
					</PriceText>
					<p>택배배송 / 무료배송</p>
				</div>
				<div className={styles.count}>
					<Amount able="able">1</Amount>
				</div>
				<div className={styles["total-price"]}>
					<p>총 상품 금액</p>
					<p>
						총 수량 <span>1</span>개
					</p>
					<PriceText size="large" unit="on" unitSize="s">
						17,500
					</PriceText>
				</div>
				<ProductDetailsButton able="disabled" />
			</div>
		</main>
	);
};

export default ProductDetailsMain;

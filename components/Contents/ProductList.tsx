import Image from "next/image";
import PriceText from "../PriceText/PriceText";
import styles from "../../styles/components/Contents/ProductList.module.scss";

const ProductList: React.FC = () => {
	return (
		<div className={styles.card}>
			<Image
				className={styles.img}
				src="/assets/dummy-image.png"
				alt="더미 이미지"
				width={380}
				height={380}
			/>
			<p className={styles.seller}>우당탕탕 라이캣의 실험실</p>
			<strong className={styles.title}>
				Hack Your Life 개발자 노트북 파우치
			</strong>
			<PriceText size="medium" unit="on" unitSize="s">
				29,000
			</PriceText>
		</div>
	);
};

export default ProductList;

import Image from "next/image";
import styles from "../../styles/Contents/ProductList.module.scss";

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
			<p className={styles.price}>
				29,000 <span>원</span>
			</p>
		</div>
	);
};

export default ProductList;

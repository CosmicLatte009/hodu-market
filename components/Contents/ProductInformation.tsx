import Image from "next/image";
import styles from "../../styles/Contents/ProductInformation.module.scss";

const ProductInformation: React.FC = () => {
	return (
		<>
			<div className={styles.card}>
				<Image
					className={styles.img}
					src="/assets/dummy-image.png"
					alt="더미 이미지"
					width={104}
					height={104}
				/>
				<div className={styles.info}>
					<p className={styles.seller}>백엔드글로벌</p>
					<strong className={styles.title}>딥러닝 개발자 무릎 담요</strong>

					<p>수량: 1개</p>
				</div>
				<span>-</span>
				<span>무료배송</span>
				<strong className={styles.price}>17,500원</strong>
			</div>
		</>
	);
};

export default ProductInformation;

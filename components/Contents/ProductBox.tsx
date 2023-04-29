import Image from "next/image";
import styles from "../../styles/Contents/ProductBox.module.scss";
import Button from "../Button/Button";

const ProductBox: React.FC = () => {
	return (
		<>
			<div className={styles.card}>
				<Image
					className={styles.img}
					src="/assets/dummy-image.png"
					alt="더미 이미지"
					width={70}
					height={70}
				/>
				<div className={styles.info}>
					<strong className={styles.title}>딥러닝 개발자 무릎 담요</strong>

					<p>재고: 370개</p>
				</div>

				<strong className={styles.price}>17,500원</strong>

				<Button size="small" theme="main">
					수정
				</Button>
				<Button size="small" theme="white">
					삭제
				</Button>
			</div>
		</>
	);
};

export default ProductBox;

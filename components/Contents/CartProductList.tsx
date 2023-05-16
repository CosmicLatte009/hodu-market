import Image from "next/image";
import styles from "../../styles/components/Contents/CartProductList.module.scss";
import Button from "../Button/Button";
import PriceText from "../PriceText/PriceText";
import Amount from "../Etc/Amount";

const CartProductList: React.FC = () => {
	return (
		<form className={styles.card}>
			<input type="checkbox" />
			<Image
				className={styles.img}
				src="/assets/dummy-image.png"
				alt="더미 이미지"
				width={160}
				height={160}
			/>
			<div className={styles.info}>
				<p className={styles.seller}>백엔드글로벌</p>
				<strong className={styles.title}>딥러닝 개발자 무릎 담요</strong>
				<p className={styles.price}>17,500원</p>
				<p>택배배송 / 무료배송</p>
			</div>
			<Amount able="able">1</Amount>
			<div className={styles["total-price"]}>
				<PriceText size="small" unit="on" unitSize="l">
					17,500
				</PriceText>
				<Button size="ms" theme="main">
					주문하기
				</Button>
			</div>
			<button type="button" className={styles["close-btn"]}>
				<Image
					src="/assets/icon-delete.svg"
					alt="닫기 아이콘"
					width={22}
					height={22}
				/>
			</button>
		</form>
	);
};

export default CartProductList;

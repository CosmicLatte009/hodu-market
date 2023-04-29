import Image from "next/image";
import styles from "../../styles/Nav/SellerTopNavBar.module.scss";

const SellerTopNavBar: React.FC = () => {
	return (
		<header className={styles["header-wrap"]}>
			<Image
				className={styles.logo}
				src="/assets/Logo-hodu.png"
				alt="로고 이미지"
				width={80}
				height={24}
			/>
			<h1 className={styles.title}>판매자 센터</h1>
		</header>
	);
};

export default SellerTopNavBar;

import Image from "next/image";
import styles from "../../styles/components/Nav/SellerTopNavBar.module.scss";

const SellerTopNavBar: React.FC = () => {
	return (
		<nav className={styles["nav-wrap"]}>
			<Image
				className={styles.logo}
				src="/assets/Logo-hodu.png"
				alt="로고 이미지"
				width={80}
				height={24}
			/>
			<span className={styles.title}>판매자 센터</span>
		</nav>
	);
};

export default SellerTopNavBar;

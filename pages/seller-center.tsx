import SellerCenterTopNavBar from "@/components/Nav/SellerCenterTopNavBar";
import styles from "../styles/pages/seller-center.module.scss";
import Image from "next/image";
import Button from "@/components/Button/Button";
import SellerCenterAside from "@/sections/SellerCenterSection/SellerCenterAside";
import SellerCenterDashBoard from "@/sections/SellerCenterSection/SellerCenterDashBoard";

function SellerCenterPage() {
	return (
		<>
			<SellerCenterTopNavBar />
			<header className={styles.header}>
				<h1>
					대시보드<strong>백엔드글로벌</strong>
				</h1>
				<Button size="ms" theme="icon">
					<Image
						src="/assets/icon-plus-white.svg"
						alt="추가 아이콘"
						width={32}
						height={32}
					/>
					상품 업로드
				</Button>
			</header>
			<main className={styles["main-wrap"]}>
				<SellerCenterAside />
				<SellerCenterDashBoard />
			</main>
		</>
	);
}

export default SellerCenterPage;

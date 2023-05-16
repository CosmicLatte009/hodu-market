import SellerCenterTopNavBar from "@/components/Nav/SellerCenterTopNavBar";
import styles from "../styles/pages/make-product.module.scss";
import MakeProductForm from "@/sections/MakeProductSection/MakeProductForm";

function MakeProductPage() {
	return (
		<>
			<SellerCenterTopNavBar />
			<header className={styles.header}>
				<h1>상품 등록</h1>
			</header>
			<main className={styles["main-wrap"]}>
				<aside className={styles["aside-wrap"]}>
					<strong>* 상품 등록 주의사항</strong>
					<div></div>
				</aside>
				<MakeProductForm />
			</main>
		</>
	);
}

export default MakeProductPage;

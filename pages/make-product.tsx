import SellerCenterTopNavBar from "@/components/Nav/SellerCenterTopNavBar";
import MakeProductForm from "@/sections/MakeProductSection/MakeProductForm";
import styles from "../styles/pages/make-product.module.scss";

function MakeProductPage() {
	return (
		<>
			<SellerCenterTopNavBar />
			<main className={styles["main-wrap"]}>
				<header className={styles.header}>
					<h1>상품 등록</h1>
				</header>
				<section className={styles["section-wrap"]}>
					<aside className={styles["aside-wrap"]}>
						<strong>*상품 등록 주의사항</strong>
						<div></div>
					</aside>
					<MakeProductForm />
				</section>
			</main>
		</>
	);
}

export default MakeProductPage;

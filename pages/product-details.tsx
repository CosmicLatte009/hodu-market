import styles from "../styles/pages/product-details.module.scss";
import TopNavBar from "@/components/Nav/TopNavBar";
// import SellerTopNavBar from "@/components/Nav/SellerTopNavBar";
import ProductDetailsMenu from "@/sections/ProductDetailsSection/ProductDetailsMenu";
import ProductDetailsMain from "@/sections/ProductDetailsSection/ProductDetailsMain";

function ProductDetailsPage() {
	return (
		<div className={styles.wrap}>
			<TopNavBar />
			{/* <SellerTopNavBar/> */}
			<ProductDetailsMain />
			<ProductDetailsMenu />
		</div>
	);
}

export default ProductDetailsPage;

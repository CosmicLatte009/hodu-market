import styles from "../../styles/sections/HomeSection/HomeProductList.module.scss";
import ProductList from "@/components/Contents/ProductList";

const HomeProductList: React.FC = () => {
	return (
		<main className={styles["product-list-wrap"]}>
			<ProductList />
			<ProductList />
			<ProductList />
			<ProductList />
			<ProductList />
			<ProductList />
			<ProductList />
			<ProductList />
		</main>
	);
};

export default HomeProductList;

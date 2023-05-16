import styles from "../../styles/sections/ShoppingCartSection/ShoppingCartProductList.module.scss";
import CartProductList from "@/components/Contents/CartProductList";

const ShoppingCartProductList: React.FC = () => {
	return (
		<div className={styles["product-list-group"]}>
			<CartProductList />
			<CartProductList />
		</div>
	);
};

export default ShoppingCartProductList;

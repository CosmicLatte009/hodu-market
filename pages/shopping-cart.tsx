import styles from "../../styles/pages/shopping-cart.module.scss";
import TopNavBar from "@/components/Nav/TopNavBar";
import TabTitle from "@/components/Nav/TabTitle";
import Button from "@/components/Button/Button";
import ShoppingCartPrice from "@/sections/ShoppingCartSection/ShoppingCartPrice";
import ShoppingCartProductList from "@/sections/ShoppingCartSection/ShoppingCartProductList";
// import ShoppingCartAlert from "@/partials/ShoppingCartSection/ShoppingCartAlert";

function ShoppingCartPage() {
	return (
		<div className={styles.wrap}>
			<TopNavBar />
			<h1 className={styles.title}>장바구니</h1>
			<TabTitle />
			<ShoppingCartProductList />
			<ShoppingCartPrice />
			{/* <ShoppingCartAlert /> */}
			<Button size="large" theme="main">
				주문하기
			</Button>
		</div>
	);
}

export default ShoppingCartPage;

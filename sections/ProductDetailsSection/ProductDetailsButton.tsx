import styles from "../../styles/sections/ProductDetailsSection/ProductDetailsButton.module.scss";

const ProductDetailsButton: React.FC<{ able: string }> = (props) => {
	const { able } = props;
	const classNames = `${styles["btn-group"]} ${styles[able]}`;
	return (
		<div className={classNames}>
			<button type="button">바로 구매</button>
			<button type="button">장바구니</button>
		</div>
	);
};

export default ProductDetailsButton;

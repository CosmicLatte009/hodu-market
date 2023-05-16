import styles from "../../styles/sections/SellerCenterSection/SellerCenterDashBoard.module.scss";
import ProductBox from "@/components/Contents/ProductBox";

const SellerCenterDashBoard: React.FC = () => {
	return (
		<div className={styles["dash-board"]}>
			<div className={styles["table-row"]}>
				<span>상품정보</span>
				<span>판매가격</span>
				<span>수정</span>
				<span>삭제</span>
			</div>
			<ul className={styles["product-box-list"]}>
				<ProductBox />
				<ProductBox />
				<ProductBox />
			</ul>
		</div>
	);
};

export default SellerCenterDashBoard;

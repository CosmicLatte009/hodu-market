import styles from "../../styles/sections/SellerCenterSection/SellerCenterAside.module.scss";
import TabMenuButton from "@/components/Button/TabMenuButton";

const SellerCenterAside: React.FC = () => {
	return (
		<aside className={styles["btn-group"]}>
			<TabMenuButton clicked="clicked">판매중인 상품(3)</TabMenuButton>
			<TabMenuButton clicked="unclicked">주문/배송</TabMenuButton>
			<TabMenuButton clicked="unclicked">문의/리뷰</TabMenuButton>
			<TabMenuButton clicked="unclicked">통계</TabMenuButton>
			<TabMenuButton clicked="unclicked">스토어 설정</TabMenuButton>
		</aside>
	);
};

export default SellerCenterAside;

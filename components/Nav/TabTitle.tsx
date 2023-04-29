import Image from "next/image";
import styles from "../../styles/Nav/TabTitle.module.scss";

const TabTitle: React.FC = () => {
	return (
		<div className={styles.wrap}>
			<button className={styles.checkbox}></button>
			<span>상품정보</span>
			<span>수량</span>
			<span>상품금액</span>
		</div>
	);
};

export default TabTitle;

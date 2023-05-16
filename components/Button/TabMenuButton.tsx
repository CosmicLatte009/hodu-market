import styles from "../../styles/components/Button/TabMenuButton.module.scss";
import { ReactNode } from "react";

interface MyProps {
	children: ReactNode;
	clicked: string;
}

const TabMenuButton: React.FC<MyProps> = (props) => {
	const { children, clicked } = props;
	const tabMenuClassName = `${styles["tab-menu-btn"]} ${styles[clicked]}`;
	return (
		<button className={tabMenuClassName} type="button">
			{children}
			<span className={styles.badge}>1</span>
		</button>
	);
};

export default TabMenuButton;

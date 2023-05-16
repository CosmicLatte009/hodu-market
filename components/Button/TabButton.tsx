import styles from "../../styles/components/Button/TabButton.module.scss";

const TabButton: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
	return (
		<button className={styles["tab-btn"]} type="button">
			{children}
		</button>
	);
};

export default TabButton;

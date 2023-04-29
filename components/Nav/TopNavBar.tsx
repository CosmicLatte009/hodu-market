import styles from "../../styles/Nav/TopNavBar.module.scss";

const TopNavBar: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
	return <header className={styles["header-wrap"]}>{children}</header>;
};

export default TopNavBar;

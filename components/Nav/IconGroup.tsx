import styles from "../../styles/Nav/IconGroup.module.scss";

const IconGroup: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
	return <div className={styles["icon-group"]}>{children}</div>;
};

export default IconGroup;

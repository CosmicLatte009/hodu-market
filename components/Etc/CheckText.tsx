import styles from "../../styles/components/Etc/CheckText.module.scss";

const CheckText: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
	return (
		<div className={styles.wrap}>
			<input className={styles.check} id="my-checkbox" type="checkbox" />
			<label className={styles["check-label"]} htmlFor="my-checkbox"></label>
			<p className={styles.desc}>{children}</p>
		</div>
	);
};

export default CheckText;

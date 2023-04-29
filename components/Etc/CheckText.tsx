import Image from "next/image";
import styles from "../styles/Etc/CheckText.module.scss";

const CheckText: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
	return (
		<>
			<input className={styles.check} id="my-checkbox" type="checkbox" />
			<label className={styles["check-label"]} htmlFor="my-checkbox"></label>
			<p className={styles.desc}>{children}</p>
		</>
	);
};

export default CheckText;

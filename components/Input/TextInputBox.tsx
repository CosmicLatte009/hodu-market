import styles from "../../styles/Input/TextInputBox.module.scss";
import { ReactNode } from "react";

interface MyProps {
	children: ReactNode;
	type: string;
	check: string;
}

const TextInputBox: React.FC<MyProps> = (props) => {
	const { children, type, check } = props;
	const inputClassName = `${styles["input-wrap"]} ${styles[check]}`;
	return (
		<>
			<label className={styles.label} htmlFor="myPassword">
				{children}
			</label>
			<input className={inputClassName} type={type} id="myPassword" />
		</>
	);
};

export default TextInputBox;

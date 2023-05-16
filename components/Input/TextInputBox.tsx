import styles from "../../styles/components/Input/TextInputBox.module.scss";
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
		<div>
			<label className={styles.label} htmlFor="myPassword">
				{children}
			</label>
			<input className={inputClassName} type={type} id="myPassword" />
		</div>
	);
};

export default TextInputBox;

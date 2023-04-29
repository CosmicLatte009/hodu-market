import styles from "../../styles/Input/TextInputLimitBox.module.scss";
import { ReactNode } from "react";

interface MyProps {
	children: ReactNode;
}

const TextInputLimitBox: React.FC<MyProps> = ({ children }) => {
	return (
		<>
			<label className={styles.label} htmlFor="product">
				{children}
			</label>
			<div className={styles["input-wrap"]}>
				<input className={styles.input} type="text" id="product" />
				<span>13/50</span>
			</div>
		</>
	);
};

export default TextInputLimitBox;

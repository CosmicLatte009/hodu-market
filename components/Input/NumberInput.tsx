import styles from "../../styles/Input/NumberInput.module.scss";
import { ReactNode } from "react";

interface MyProps {
	children: ReactNode;
}

const NumberInput: React.FC<MyProps> = ({ children }) => {
	return (
		<>
			<label className={styles.label} htmlFor="price">
				{children}
			</label>
			<div className={styles["input-wrap"]}>
				<input className={styles.input} type="text" id="price" />
				<span>원</span>
			</div>
		</>
	);
};

export default NumberInput;

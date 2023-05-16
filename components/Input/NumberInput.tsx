import styles from "../../styles/components/Input/NumberInput.module.scss";
import { ReactNode } from "react";

interface MyProps {
	children: ReactNode;
	unit: string;
}

const NumberInput: React.FC<MyProps> = (props) => {
	const { children, unit } = props;
	return (
		<div>
			<label className={styles.label} htmlFor="price">
				{children}
			</label>
			<div className={styles["input-wrap"]}>
				<input className={styles.input} type="text" id="price" />
				<span>{unit}</span>
			</div>
		</div>
	);
};

export default NumberInput;

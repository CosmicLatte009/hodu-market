import styles from "../../styles/sections/JoinSection/JoinInputWithBtn.module.scss";
import { ReactNode } from "react";

interface MyProps {
	children: ReactNode;
	type: string;
	check: string;
	btnName: string;
}

const JoinInputWithBtn: React.FC<MyProps> = (props) => {
	const { children, type, check, btnName } = props;
	const inputClassName = `${styles["input-wrap"]} ${styles[check]}`;
	return (
		<div>
			<label className={styles.label} htmlFor="myPassword">
				{children}
			</label>
			<input className={inputClassName} type={type} id="myPassword" />
			<button type="button" className={styles.btn}>
				{btnName}
			</button>
		</div>
	);
};

export default JoinInputWithBtn;

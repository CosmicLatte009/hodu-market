import styles from "../../styles/sections/PaymentSection/PaymentInput.module.scss";
import { ReactNode } from "react";

interface MyProps {
	children: ReactNode;
	type: string;
	labelID: string;
	size: string;
}

const PaymentInput: React.FC<MyProps> = (props) => {
	const { children, type, labelID, size } = props;

	const inputClassName = `${styles["payment-input"]} ${styles[size]}`;

	return (
		<div className={styles.wrap}>
			<label htmlFor={labelID}>{children}</label>
			<input className={inputClassName} type={type} id={labelID} />
		</div>
	);
};

export default PaymentInput;

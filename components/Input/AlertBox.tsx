import { ReactNode } from "react";
import styles from "../styles/components/Input/AlertBox.module.scss";

interface MyProps {
	children: ReactNode;
	validation: string;
}

const AlertBox: React.FC<MyProps> = (props) => {
	const { children, validation } = props;

	const classNames = `${styles.alert} ${styles[validation]}`;

	return <span className={classNames}>{children}</span>;
};

export default AlertBox;

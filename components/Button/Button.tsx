import styles from "../../styles/components/Button/Button.module.scss";
import { ReactNode } from "react";

interface MyProps {
	children: ReactNode;
	size: string;
	theme: string;
}

const Button: React.FC<MyProps> = (props) => {
	const { children, size, theme } = props;

	const classNames = `${styles.btn} ${styles[size]} ${styles[theme]}`;
	return (
		<button className={classNames} type="button">
			{children}
		</button>
	);
};

export default Button;

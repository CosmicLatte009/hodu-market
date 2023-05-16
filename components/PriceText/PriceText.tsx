import styles from "../../styles/components/PriceText/PriceText.module.scss";
import { ReactNode } from "react";

interface MyProps {
	children: ReactNode;
	size: string;
	unit: string;
	unitSize: string;
}

const PriceText: React.FC<MyProps> = (props) => {
	const { children, size, unit, unitSize } = props;

	const classNames = `${styles.amount} ${styles[size]} ${styles[unitSize]}`;

	return (
		<>
			{unit === "on" ? (
				<strong className={classNames}>
					{children}
					<span>원</span>
				</strong>
			) : (
				<strong className={classNames}>{children}</strong>
			)}
		</>
	);
};

export default PriceText;

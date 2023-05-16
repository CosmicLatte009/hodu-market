import styles from "../../styles/components/PriceText/PriceGroup.module.scss";
import { ReactNode } from "react";

interface MyProps {
	size: string;
	label: string;
	children: ReactNode;
}

const PriceGroup: React.FC<MyProps> = (props) => {
	const { children, label, size } = props;

	const classNames = `${styles.wrap} ${styles[size]}`;
	return (
		<div className={classNames}>
			<p>{label}</p>
			<strong>
				{children}
				<span>원</span>
			</strong>
		</div>
	);
};

export default PriceGroup;

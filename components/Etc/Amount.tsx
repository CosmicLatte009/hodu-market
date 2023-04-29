import Image from "next/image";
import styles from "../styles/Etc/Amount.module.scss";
import { ReactNode } from "react";

interface MyProps {
	children: ReactNode;
	able: string;
}
const Amount: React.FC<MyProps> = (props) => {
	const { children, able } = props;

	const plusBtnClassName = `${styles["plus-btn"]} ${styles[able]}`;
	return (
		<div className={styles.wrap}>
			<button type="button">
				<Image
					src="/assets/icon-minus-line.svg"
					alt="빼기 아이콘"
					width={20}
					height={20}
				/>
			</button>
			<div className={styles["divider-right"]}></div>
			<span className={styles.amount}>{children}</span>
			<div className={styles["divider-left"]}></div>
			<button className={plusBtnClassName} type="button">
				<Image
					src="/assets/icon-plus-line.svg"
					alt="추가 아이콘"
					width={20}
					height={20}
				/>
			</button>
		</div>
	);
};

export default Amount;

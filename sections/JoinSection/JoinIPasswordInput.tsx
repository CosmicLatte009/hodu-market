import styles from "../../styles/sections/JoinSection/JoinPasswordInput.module.scss";
import Image from "next/image";
import { ReactNode } from "react";

interface MyProps {
	children: ReactNode;
	type: string;
	check: string;
}

const JoinPasswordInput: React.FC<MyProps> = (props) => {
	const { children, type, check } = props;
	const inputClassName = `${styles["input-wrap"]} ${styles[check]}`;
	return (
		<div>
			<label className={styles.label} htmlFor="myPassword">
				{children}
			</label>
			<div className={inputClassName}>
				<input type={type} id="myPassword" className={styles.input} />
				<Image
					src="/assets/icon-check-off.svg"
					alt="미체크 아이콘"
					width={28}
					height={28}
				/>
				{/* <Image
					src="/assets/icon-check-on.svg"
					alt="미체크 아이콘"
					width={28}
					height={28}
				/> */}
			</div>
		</div>
	);
};

export default JoinPasswordInput;

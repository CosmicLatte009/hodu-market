import styles from "../../styles/components/Etc/Modal.module.scss";
import Image from "next/image";
import { ReactNode } from "react";

interface MyProps {
	children: ReactNode;
	childrenType: string;
	negativeBtn: string;
	positiveBtn: string;
}

const Modal: React.FC<MyProps> = (props) => {
	const { children, negativeBtn, positiveBtn, childrenType } = props;

	const contentClassName = `${styles.content} ${styles[childrenType]}`;
	return (
		<div className={styles["modal-background"]}>
			<div className={styles.modal}>
				<div className={contentClassName}>{children}</div>
				<div className={styles["btn-group"]}>
					<button type="button">{negativeBtn}</button>
					<button type="button">{positiveBtn}</button>
				</div>
				<button>
					<Image
						src="/assets/icon-delete.svg"
						alt="닫는 버튼"
						width={22}
						height={22}
					/>
				</button>
			</div>
		</div>
	);
};

export default Modal;

import styles from "../../styles/components/Nav/Icon.module.scss";
import Image from "next/image";

interface MyProps {
	children: string;
	src: string;
	alt: string;
	clicked: string;
}

const Icon: React.FC<MyProps> = (props) => {
	const { children, src, alt, clicked } = props;
	const iconBtnClassName = `${styles["icon-btn"]} ${styles[clicked]}`;
	return (
		<button className={iconBtnClassName} type="button">
			<Image
				className={styles["icon-img"]}
				src={src}
				alt={alt}
				width={32}
				height={32}
			/>
			{children}
		</button>
	);
};

export default Icon;

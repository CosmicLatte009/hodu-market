import styles from "../../styles/Nav/Icon.module.scss";
import Image from "next/image";

interface MyProps {
	children: string;
	src: string;
	alt: string;
}

const Icon: React.FC<MyProps> = (props) => {
	const { children, src, alt } = props;

	return (
		<button className={styles["icon-button"]} type="button">
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

import styles from "../../styles/components/Dropdown/NumDropdown.module.scss";
import Image from "next/image";

const NumDropdown: React.FC = () => {
	return (
		<select className={styles.wrap} size={1}>
			<option value="010">010</option>
			<option value="011">011</option>
			<option value="016">016</option>
			<option value="017">017</option>
			<option value="018">018</option>
			<option value="019">019</option>
			<Image
				src="/assets/icon-down-arrow.svg"
				alt="드롭다운"
				width={22}
				height={22}
			/>
		</select>
	);
};

export default NumDropdown;

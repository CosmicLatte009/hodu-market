import styles from "../styles/Dropdown/NumDropdown.module.scss";

const NumDropdown: React.FC = () => {
	return (
		<select className={styles.wrap} size={4}>
			<option>010</option>
			<option>011</option>
			<option>016</option>
			<option>017</option>
			<option>018</option>
			<option>019</option>
		</select>
	);
};

export default NumDropdown;

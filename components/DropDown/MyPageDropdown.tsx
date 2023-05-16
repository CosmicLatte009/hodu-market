import styles from "../../styles/components/Dropdown/MyPageDropdown.module.scss";

const MyPageDropdown: React.FC = () => {
	return (
		<select className={styles.wrap} size={2}>
			<option>마이페이지</option>
			<option>로그아웃</option>
		</select>
	);
};

export default MyPageDropdown;

import styles from "../../styles/components/Dropdown/MyPageDropdown.module.scss";

const MyPageDropdown: React.FC = () => {
	return (
		<aside className={styles.wrap}>
			<select className={styles.select} size={2}>
				<option>마이페이지</option>
				<option>로그아웃</option>
			</select>
		</aside>
	);
};

export default MyPageDropdown;

import styles from "../../styles/sections/JoinSection/JoinForm.module.scss";
import JoinUserInfoGroup from "@/sections/JoinSection/JoinUserInfoGroup";
import JoinPersonalInfoGroup from "@/sections/JoinSection/JoinPersonalInfoGroup";
import JoinSellerInfoGroup from "@/sections/JoinSection/JoinSellerInfoGroup";
import CheckText from "@/components/Etc/CheckText";
import Button from "@/components/Button/Button";

function JoinForm() {
	return (
		<>
			<div className={styles["join-wrap"]}>
				<div className={styles["join-btn-group"]}>
					<button>구매회원가입</button>
					<button>판매회원가입</button>
				</div>
				<div className={styles["join-input-group"]}>
					<JoinUserInfoGroup />
					<JoinPersonalInfoGroup />
					<JoinSellerInfoGroup />
				</div>
			</div>
			<CheckText>
				호두샵의 <span>이용약관</span> 및 <span>개인정보처리방침</span>에 대한
				내용을 확인하였고 동의합니다.
			</CheckText>
			<Button size="medium" theme="main">
				가입하기
			</Button>
		</>
	);
}

export default JoinForm;

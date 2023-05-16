import JoinInputWithBtn from "@/sections/JoinSection/JoinInputWithBtn";
import JoinPasswordInput from "@/sections/JoinSection/JoinIPasswordInput";
import styles from "../../styles/sections/JoinSection/JoinUserInfoGroup.module.scss";

const JoinUserInfoGroup: React.FC = () => {
	return (
		<div className={styles["join-user-info-group"]}>
			<JoinInputWithBtn type="text" check="before-check" btnName="중복확인">
				아이디
			</JoinInputWithBtn>
			<JoinPasswordInput type="password" check="before-check">
				비밀번호
			</JoinPasswordInput>
			<JoinPasswordInput type="password" check="before-check">
				비밀번호 재확인
			</JoinPasswordInput>
		</div>
	);
};

export default JoinUserInfoGroup;

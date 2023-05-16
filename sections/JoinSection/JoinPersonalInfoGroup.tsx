import styles from "../../styles/sections/JoinSection/JoinPersonalInfoGroup.module.scss";
import TextInputBox from "@/components/Input/TextInputBox";
import JoinPhoneInput from "@/sections/JoinSection/JoinPhoneInput";
import JoinEmailInput from "@/sections/JoinSection/JoinEmailInput";

const JoinPersonalInfoGroup: React.FC = () => {
	return (
		<div className={styles["join-personal-info-group"]}>
			<TextInputBox type="text" check="before-check">
				이름
			</TextInputBox>
			<JoinPhoneInput check="before-check" />
			<JoinEmailInput check="before-check" />
		</div>
	);
};

export default JoinPersonalInfoGroup;

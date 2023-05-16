import styles from "../../styles/sections/JoinSection/JoinSellerInfoGroup.module.scss";
import TextInputBox from "@/components/Input/TextInputBox";
import JoinInputWithBtn from "@/sections/JoinSection/JoinInputWithBtn";

const JoinSellerInfoGroup: React.FC = () => {
	return (
		<div className={styles["join-seller-info-group"]}>
			<JoinInputWithBtn type="text" check="before-check" btnName="인증">
				사업자 등록번호
			</JoinInputWithBtn>
			<TextInputBox type="text" check="before-check">
				스토어 이름
			</TextInputBox>
		</div>
	);
};

export default JoinSellerInfoGroup;

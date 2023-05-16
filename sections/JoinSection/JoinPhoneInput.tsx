import NumDropdown from "@/components/DropDown/NumDropdown";
import styles from "../../styles/sections/JoinSection/JoinPhoneInput.module.scss";

const JoinPhoneInput: React.FC<{ check: string }> = ({ check }) => {
	const classNames = `${styles.wrap} ${styles[check]}`;
	return (
		<div className={classNames}>
			<label htmlFor="phone1 phone2 phone3">휴대폰번호</label>
			<NumDropdown />
			<input type="tel" maxLength={4} id="phone2" />
			<input type="tel" maxLength={4} id="phone3" />
		</div>
	);
};

export default JoinPhoneInput;

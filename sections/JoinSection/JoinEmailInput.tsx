import styles from "../../styles/sections/JoinSection/JoinEmailInput.module.scss";

const JoinEmailInput: React.FC<{ check: string }> = ({ check }) => {
	const classNames = `${styles.wrap} ${styles[check]}`;
	return (
		<div className={classNames}>
			<label htmlFor="email1 email2 ">이메일</label>
			<input type="text" maxLength={12} id="email1" />
			@
			<input type="text" maxLength={12} id="email2" />
		</div>
	);
};

export default JoinEmailInput;

import styles from "../../styles/Input/TextInput.module.scss";

interface MyProps {
	placeholder: string;
}

const TextInput: React.FC<MyProps> = ({ placeholder }) => {
	return <input className={styles.wrap} placeholder={placeholder} />;
};

export default TextInput;

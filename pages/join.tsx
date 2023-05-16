import styles from "../styles/pages/join.module.scss";
import Image from "next/image";
import JoinForm from "@/sections/JoinSection/JoinForm";

function JoinPage() {
	return (
		<main className={styles.wrap}>
			<Image
				className={styles.logo}
				src="/assets/Logo-hodu.png"
				alt="호두마켓 로고"
				width={238}
				height={74}
			/>
			<JoinForm />
		</main>
	);
}

export default JoinPage;

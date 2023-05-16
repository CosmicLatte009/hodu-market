import Image from "next/image";
import TextInput from "@/components/Input/TextInput";
import Button from "@/components/Button/Button";
import styles from "../styles/pages/login.module.scss";

function LoginPage() {
	return (
		<main className={styles.wrap}>
			<Image
				className={styles.logo}
				src="/assets/Logo-hodu.png"
				alt="호두마켓 로고"
				width={238}
				height={74}
			/>
			<div className={styles["login-wrap"]}>
				<div className={styles["login-btn-group"]}>
					<button>구매회원 로그인</button>
					<button>판매회원 로그인</button>
				</div>
				<div className={styles["login-input-group"]}>
					<TextInput placeholder="아이디" />
					<TextInput placeholder="비밀번호" />
					<Button size="medium" theme="main">
						로그인
					</Button>
				</div>
			</div>
			<span className={styles["join-btn-group"]}>
				<button>회원가입</button>
				<span> | </span>
				<button>비밀번호 찾기</button>
			</span>
		</main>
	);
}

export default LoginPage;

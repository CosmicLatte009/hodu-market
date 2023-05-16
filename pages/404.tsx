import styles from "../styles/pages/404.module.scss";
import Image from "next/image";

function Page404() {
	return (
		<div className={styles.wrap}>
			<Image
				src="/assets/icon-404.png"
				alt="404 이미지"
				width={276}
				height={236}
			/>
			<div className={styles.desc}>
				<h1>페이지를 찾을 수 없습니다.</h1>
				<p>
					페이지가 존재하지 않거나 사용할 수 없는 페이지입니다. <br />웹 주소가
					올바른지 확인해 주세요.
				</p>
				<button>메인으로</button>
				<button>이전 페이지</button>
			</div>
		</div>
	);
}

export default Page404;

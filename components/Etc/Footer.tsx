import styles from "../../styles/components/Etc/Footer.module.scss";
import Image from "next/image";

const Footer: React.FC = () => {
	return (
		<footer className={styles.wrap}>
			<div>
				<div className={styles.info}>
					<span>호두샵 소개</span>
					<span>이용약관</span>
					<span>개인정보처리방침</span>
					<span>전자금융거래약관</span>
					<span>청소년보호정책</span>
					<span>제휴문의</span>
				</div>
				<div className={styles["sns-wrap"]}>
					<Image
						src="/assets/icon-insta.svg"
						alt="인스타 아이콘"
						width={32}
						height={32}
					/>
					<Image
						src="/assets/icon-fb.svg"
						alt="페이스북 아이콘"
						width={32}
						height={32}
					/>
					<Image
						src="/assets/icon-yt.svg"
						alt="유튜브 아이콘"
						width={32}
						height={32}
					/>
				</div>
			</div>
			<hr />
			<div className={styles["company-info"]}>
				<span>(주)HODU SHOP</span>
				<span>제주특별자치도 제주시 동광고 137 제주코딩베이스캠프</span>
				<span>사업자 번호 : 000-0000-0000 | 통신판매업</span>
				<span>대표 : 김호두</span>
			</div>
		</footer>
	);
};

export default Footer;

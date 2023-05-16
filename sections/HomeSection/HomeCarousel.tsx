import styles from "../../styles/sections/HomeSection/HomeCarousel.module.scss";
import Image from "next/image";

const HomeCarousel: React.FC = () => {
	return (
		<div className={styles.carousel}>
			<button>
				<Image
					src="/assets/icon-swiper-1.svg"
					alt="캐러셀 왼쪽 버튼"
					width={60}
					height={124}
				/>
			</button>
			<button>
				<Image
					src="/assets/icon-swiper-2.svg"
					alt="캐러셀 오른쪽 버튼"
					width={60}
					height={124}
				/>
			</button>
			<div className={styles["ellipse-group"]}>
				<div className={styles["ellipse-black"]}></div>
				<div className={styles["ellipse-white"]}></div>
			</div>
		</div>
	);
};

export default HomeCarousel;

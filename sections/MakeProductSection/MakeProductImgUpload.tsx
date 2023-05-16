import styles from "../../styles/sections/MakeProductSection/MakeProductImgUpload.module.scss";
import Image from "next/image";

const MakeProductImgUpload: React.FC = () => {
	return (
		<div className={styles["img-upload-wrap"]}>
			<strong>상품 이미지</strong>
			<button>
				<Image
					src="/assets/icon-img.png"
					alt="이미지 업로드 버튼"
					width={50}
					height={50}
				/>
			</button>
		</div>
	);
};

export default MakeProductImgUpload;

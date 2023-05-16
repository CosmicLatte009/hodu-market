import styles from "../../styles/sections/MakeProductSection/MakeProductForm.module.scss";
import MakeProductInputs from "@/sections/MakeProductSection/MakeProductInputs";
import MakeProductImgUpload from "@/sections/MakeProductSection/MakeProductImgUpload";

const MakeProductForm: React.FC = () => {
	return (
		<form>
			<div className={styles["product-post"]}>
				<MakeProductImgUpload />
				<MakeProductInputs />
			</div>
			<div className={styles["editor-wrap"]}>
				<strong>상품 상세 정보</strong>
				<div>에디터 영역</div>
			</div>
			<div className={styles["form-btn-group"]}>
				<button className={styles["btn-cancel"]}>취소</button>
				<button className={styles["btn-save"]}>저장하기</button>
			</div>
		</form>
	);
};

export default MakeProductForm;

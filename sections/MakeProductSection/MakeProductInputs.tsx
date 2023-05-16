import styles from "../../styles/sections/MakeProductSection/MakeProductInputs.module.scss";
import TextInputLimitBox from "@/components/Input/TextInputLimitBox";
import NumberInput from "@/components/Input/NumberInput";

const MakeProductInputs: React.FC = () => {
	return (
		<div className={styles["product-details-input"]}>
			<TextInputLimitBox>상품명</TextInputLimitBox>
			<NumberInput unit="원">판매가</NumberInput>
			<div className={styles["shipping-btn-group"]}>
				<strong>배송방법</strong>
				<button className={styles["shipping-btn-select"]}>
					택배,소포,등기
				</button>
				<button className={styles["shipping-btn-unselect"]}>
					직접배송(화물배달)
				</button>
			</div>
			<NumberInput unit="원">기본 배송비</NumberInput>
			<NumberInput unit="개">재고</NumberInput>
		</div>
	);
};

export default MakeProductInputs;

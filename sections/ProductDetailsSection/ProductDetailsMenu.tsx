import TabButton from "@/components/Button/TabButton";

const ProductDetailsMenu: React.FC = () => {
	return (
		<div>
			<TabButton>버튼</TabButton>
			<TabButton>리뷰</TabButton>
			<TabButton>Q&A</TabButton>
			<TabButton>반품/교환정보</TabButton>
		</div>
	);
};

export default ProductDetailsMenu;

import Image from "next/image";
import styles from "../../styles/Nav/SearchBar.module.scss";

function SearchBar() {
	return (
		<div className={styles["search-wrap"]}>
			<Image
				className={styles["logo"]}
				src="/assets/Logo-hodu.png"
				alt="로고 이미지"
				width={124}
				height={38}
			/>
			<form className={styles["search-form"]}>
				<input
					className={styles["search-input"]}
					type="search"
					placeholder="상품을 검색해보세요!"
				/>
				<button className={styles["search-icon"]} type="submit">
					<Image
						src="/assets/icon-search.svg"
						alt="검색 아이콘"
						width={28}
						height={28}
					/>
				</button>
			</form>
		</div>
	);
}

export default SearchBar;

import styles from "../../styles/components/Nav/TopNavBar.module.scss";
import SearchBar from "./SearchBar";
import Icon from "./Icon";

const TopNavBar: React.FC = () => {
	return (
		<nav className={styles["nav-wrap"]}>
			<SearchBar />
			<div className={styles["nav-icon-group"]}>
				<Icon
					src="/assets/icon-shopping-cart.svg"
					alt="장바구니 아이콘"
					clicked="unclicked"
				>
					장바구니
				</Icon>
				<Icon src="/assets/icon-user.svg" alt="유저 아이콘" clicked="unclicked">
					로그인
				</Icon>
				{/* <Button size="ms" theme="icon">
            <Image
                src="/assets/icon-shopping-bag.svg"
                alt="쇼핑백 아이콘"
                width={32}
                height={32}
            />
            판매자 센터
        </Button> */}
			</div>
		</nav>
	);
};

export default TopNavBar;

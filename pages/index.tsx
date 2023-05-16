import styles from "../styles/pages/index.module.scss";
import TopNavBar from "@/components/Nav/TopNavBar";
// import SellerTopNavBar from "@/components/Nav/SellerTopNavBar";
import HomeCarousel from "@/sections/HomeSection/HomeCarousel";
import HomeProductList from "@/sections/HomeSection/HomeProductList";
import Footer from "@/components/Etc/Footer";

function Home() {
	return (
		<div className={styles.wrap}>
			<TopNavBar />
			{/* <SellerTopNavBar/> */}
			<HomeCarousel />
			<HomeProductList />
			<Footer />
		</div>
	);
}

export default Home;

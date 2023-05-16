import styles from "../styles/pages/payment.module.scss";
import TopNavBar from "@/components/Nav/TopNavBar";
import PaymentProductInfoList from "@/sections/PaymentSection/PaymentProductInfoList";
import PaymentForm from "@/sections/PaymentSection/PaymentForm";

function PaymentPage() {
	return (
		<div className={styles.wrap}>
			<TopNavBar />
			<header className={styles.header}>
				<h1>주문/결제하기</h1>
			</header>
			<main>
				<PaymentProductInfoList />
				<PaymentForm />
			</main>
		</div>
	);
}

export default PaymentPage;

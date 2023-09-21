import Image from "next/image";
import styles from "./confirmationView.module.css";
import InfoCard from "./infoCard";
import Card from "./card";

function ConfirmationView() {
  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper}>
        <Card>
          <div className={styles.cardContent}>
            <Image src="/success.svg" width={200} height={200} alt="success" />
            <h4>Your appointment has been booked!</h4>
            <p>A confirmation has been sent to your email address.</p>
          </div>
        </Card>
      </div>
      <div className={styles.cardWrapper}>
        <InfoCard />
      </div>
    </div>
  );
}

export default ConfirmationView;

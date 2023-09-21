import Card from "./card";
import styles from "./infoCard.module.css";

function InfoCard() {
  return (
    <Card>
      <div className={styles.infoCardTop}>
        <h4>Gold Spa</h4>
      </div>
      <div className={styles.infoCardBottom}>
        <div className={styles.infoCardBottomEntry}>
          <p>Address</p>
          <div>
            <p>2525 Camino del Rio S</p>
            <p>Suite 315 Room 8</p>
            <p>San Diego, CA 92108</p>
          </div>
        </div>
        <div className={styles.infoCardBottomEntry}>
          <p>Email</p>
          <div>
            <p>goldspa@gmail.com</p>
          </div>
        </div>
        <div className={styles.infoCardBottomEntry}>
          <p>Phone</p>
          <div>
            <p>+11 123 4567 222</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default InfoCard;

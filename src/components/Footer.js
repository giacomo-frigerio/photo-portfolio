import styles from "./Footer.module.css";
import instagramIcon from "../assets/instagram.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <p>Social</p>
        <div className={styles.icons}>
          <img src={instagramIcon} alt="instagram" width="30px" height="30px" />
        </div>
        <p>Powered by Giacomo Frigerio</p>
      </div>
    </div>
  );
}

export default Footer;

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>Facebook</p>
      <p>Instagram</p>
      <p>Twitter</p>
      <p>Pinterest</p>
      <p>Linkedin</p>
      <p>Powered by Giacomo Frigerio</p>
    </div>
  );
}

export default Footer;

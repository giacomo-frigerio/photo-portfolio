import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <a title="home" href="#home">
        Home
      </a>
      <a title="portfolio" href="#portfolio">
        Portfolio
      </a>
      <a title="about" href="#about">
        About me
      </a>
      <a title="contact" href="#contact">
        Contacts
      </a>
    </div>
  );
}

export default Navbar;

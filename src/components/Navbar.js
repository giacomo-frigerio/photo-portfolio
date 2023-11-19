import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <button>Home</button>
      <button>Portfolio</button>
      <button>About me</button>
      <button>Contacts</button>
    </div>
  );
}

export default Navbar;

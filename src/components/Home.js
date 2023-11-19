import coverImg from "../assets/cover.jpg";
import styles from "./Home.module.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <img className={styles.coverImage} src={coverImg} alt="cover" />
      <div className={styles.personalInfo}>
        <p>Carlotta Frigerio</p>
        <button>Download resume</button>
      </div>
    </>
  );
}

export default Home;

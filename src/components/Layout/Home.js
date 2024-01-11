import coverImg from "../../assets/cover.jpg";
import styles from "./Home.module.css";
import PersonalInfo from "./PageItems/PersonalInfo";
import Portfolio from "./PageItems/Portfolio";
import About from "./PageItems/About";
import Contact from "./PageItems/Contact";

function Home() {
  return (
    <div id="home">
      <img className={styles.coverImage} src={coverImg} alt="cover" />
      <PersonalInfo />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default Home;

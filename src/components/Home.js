import coverImg from "../assets/cover.jpg";
import styles from "./Home.module.css";
import PersonalInfo from "./PersonalInfo";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

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

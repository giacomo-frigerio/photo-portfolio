import styles from "./Portfolio.module.css";
import coverImg from "../../../assets/cover.jpg";
import plusIcon from "../../../assets/plusIcon.svg";

function Portfolio() {
  return (
    <div id="portfolio">
      <h1>Portfolio</h1>
      <div className={styles.projects}>
        <img
          className={styles["project-folder"]}
          src={coverImg}
          alt="project-1"
        />
        <img
          className={styles["project-folder"]}
          src={coverImg}
          alt="project-1"
        />
        <img
          className={styles["project-folder"]}
          src={coverImg}
          alt="project-1"
        />
      </div>
      <button className={styles["open-projects"]}>
        <span className={styles.text}>Open all projects</span>
        <img className={styles.icon} src={plusIcon} alt="open all projects" />
      </button>
    </div>
  );
}

export default Portfolio;

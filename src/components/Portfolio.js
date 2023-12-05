import styles from "./Portfolio.module.css";

function Portfolio() {
  return (
    <div id="portfolio">
      <h1>Portfolio</h1>
      <div className={styles.projects}>
        <p>Project 1</p>
        <p>Project 2</p>
        <p>Project 3</p>
      </div>
    </div>
  );
}

export default Portfolio;

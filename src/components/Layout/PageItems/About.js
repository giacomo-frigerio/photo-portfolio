import styles from "./About.module.css";

function About() {
  return (
    <div id="about" className={styles.about}>
      <h1>About me</h1>
      <p>Description</p>
      <p>Skills</p>
      <p>Additional info (projects...)</p>
    </div>
  );
}

export default About;

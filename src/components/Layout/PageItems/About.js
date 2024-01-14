import styles from "./About.module.css";

function About(props) {
  const userInfo = props.user;
  const { description } = userInfo;

  return (
    <div id="about" className={styles.about}>
      <h1>About me</h1>
      <p>{description}</p>
      <p>Skills</p>
      <p>Additional info (projects...)</p>
    </div>
  );
}

export default About;

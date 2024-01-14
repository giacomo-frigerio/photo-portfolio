import styles from "./ProjectDetail.module.css";

function ProjectDetail(props) {
  const project = props.project;

  return (
    <>
      <p className={styles["project-title"]}>{project.title}</p>
      <div className={styles.imageList}>
        {project.images.map((img, index) => (
          <img src={img} alt={index} key={index} />
        ))}
      </div>
    </>
  );
}

export default ProjectDetail;

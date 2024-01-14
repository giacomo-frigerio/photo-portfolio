import { useState } from "react";
import Modal from "../../UI/Modal";
import ProjectDetail from "./ProjectDetail";
import styles from "./Projects.module.css";

function Projects(props) {
  const [openProject, setOpenProject] = useState(null);
  const projectsList = props.projects;

  const openProjectHandler = (e) => {
    const projectClicked = projectsList.find((project) => {
      return project.id === e.target.id;
    });
    setOpenProject(projectClicked);
  };

  const closeProjectHandler = () => {
    setOpenProject(null);
  };

  // Open project details
  if (openProject)
    return (
      <Modal className={styles["project-images"]} onClose={closeProjectHandler}>
        <ProjectDetail project={openProject} />
      </Modal>
    );

  return (
    <div className={styles.projects}>
      {projectsList.map((project) => (
        <img
          className={styles["project-folder"]}
          src={project.coverImage}
          alt={project.title}
          id={project.id}
          key={project.id}
          onClick={openProjectHandler}
        />
      ))}
    </div>
  );
}

export default Projects;

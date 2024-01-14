import Projects from "../Projects/Projects";
import { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";

function Portfolio() {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    const db = ref(getDatabase());
    get(child(db, "projects"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const loadedProjects = [];

          for (const key in data) {
            loadedProjects.push(data[key]);
          }

          setProjectsList(loadedProjects);
        } else {
          setProjectsList([]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div id="portfolio">
      <h1>Portfolio</h1>
      <Projects projects={projectsList} />
    </div>
  );
}

export default Portfolio;

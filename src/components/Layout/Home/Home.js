import styles from "./Home.module.css";
import PersonalInfo from "../PageItems/PersonalInfo";
import Portfolio from "../PageItems/Portfolio";
import About from "../PageItems/About";
import Contact from "../PageItems/Contact";
import { useEffect, useState } from "react";
import { getDatabase, ref, get, child } from "firebase/database";
import React from "react";

function Home() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const db = ref(getDatabase());
    get(child(db, "personalInfo"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();

          for (const key in data) {
            setUserInfo(data[key]);
          }
        } else {
          setUserInfo({});
        }
      })
      .catch((error) => {
        setUserInfo({});
      });
  }, []);

  return (
    <div id="home">
      <img
        className={styles.coverImage}
        src={userInfo.coverImage}
        alt="cover"
      />
      <PersonalInfo user={userInfo} />
      <Portfolio />
      <About user={userInfo} />
      <Contact />
    </div>
  );
}

export default Home;

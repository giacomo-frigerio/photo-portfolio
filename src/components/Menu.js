import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

function Menu() {
  const [clickedPortfolio, setClickedPortfolio] = useState(false);
  const [clickedAbout, setClickedAbout] = useState(false);
  const [clickedContact, setClickedContact] = useState(false);
  let menu = null;

  const toPageHandler = (e) => {
    switch (e.target.id) {
      case "lastProject":
        break;
      case "portfolio":
        setClickedPortfolio(true);
        break;
      case "about":
        setClickedAbout(true);
        break;
      case "contact":
        setClickedContact(true);
        break;
      default:
        break;
    }
    return;
  };

  menu = (
    <>
      <button id="lastProject" onClick={toPageHandler}>
        Last project
      </button>
      <button id="portfolio" onClick={toPageHandler}>
        Portfolio
      </button>
      <button id="about" onClick={toPageHandler}>
        About me
      </button>
      <button id="contact" onClick={toPageHandler}>
        Contact
      </button>
    </>
  );
  if (clickedPortfolio) menu = <Portfolio />;
  if (clickedAbout) menu = <About />;
  if (clickedContact) menu = <Contact />;

  return menu;
}

export default Menu;

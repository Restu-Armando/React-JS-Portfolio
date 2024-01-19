import React from "react";

import NavbarComponent from "./components/NavbarComponent";
import HeroComponent from "./components/HeroComponent";
import SkillsComponents from "./components/SkillsComponents";
import ProjectComponents from "./components/ProjectComponents";
import FooterComponents from "./components/FooterComponents";

function App() {
  return (
    <>
      <NavbarComponent />

      <HeroComponent />
      <SkillsComponents></SkillsComponents>
      <ProjectComponents></ProjectComponents>
      <FooterComponents></FooterComponents>
    </>
  );
}

export default App;

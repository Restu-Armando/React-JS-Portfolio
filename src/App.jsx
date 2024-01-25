import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponents from "./components/FooterComponents";

import AboutmePage from "./pages/AboutmePage";
import SkillsPage from "./pages/SkillsPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import HeroPage from "./pages/HeroPage";

import { Nav } from "react-bootstrap";

function App() {
  return (
    <Router>
      <NavbarComponent></NavbarComponent>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeroPage />
              <SkillsPage />
              <ProjectPage />
            </div>
          }
        />
        <Route path="/aboutme" element={<AboutmePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
      <FooterComponents></FooterComponents>
    </Router>
  );
}

// <>
//   <Router>
//     <NavbarComponent />
//     <Routes>
//       <Route path="/" Component={HeroPage} />
//       <Route path="/about" Component={AboutmePage} />
//       <Route path="/skills" Component={SkillsPage} />
//       <Route path="/project" Component={ProjectPage} />
//       <Route path="/contact" Component={ContactPage} />
//     </Routes>
//   </Router>
//   <FooterComponents></FooterComponents>
// </>
//    {/* <HeroPage></HeroPage>
// <AboutmePage></AboutmePage>
// <SkillsPage></SkillsPage>
// <ProjectPage></ProjectPage>
// <ContactPage></ContactPage>*/}
export default App;

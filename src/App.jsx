import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Component
import NavbarComponent from './components/NavbarComponent'
import FooterComponents from './components/FooterComponents copy'
import ScrollToTopOnNavigation from './components/ScrollToTopOnNavigation'

// Page
import AboutmePage from './pages/AboutmePage'
import SkillsPage from './pages/SkillsPage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import HeroPage from './pages/HeroPage'

function App() {
  return (
    <div>
      <Router>
        <NavbarComponent></NavbarComponent>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <HeroPage />
                <ScrollToTopOnNavigation />
                <SkillsPage />
                <ProjectPage />
              </div>
            }
          />

          <Route path="/about" element={<AboutmePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>

        <FooterComponents></FooterComponents>
      </Router>
    </div>
  )
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
export default App

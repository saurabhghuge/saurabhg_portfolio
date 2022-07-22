import './App.css';
import Navbarr from './components/Navbar/Navbarr';
import FrontPage from './components/FrontPage/FrontPage';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
function App() {
  return (
    <div className="app">

      {/* <FrontPage/> */}
      {/* <Router> */}
      <Navbarr/>
      <FrontPage />
      <About/>
      <Projects />
      <Experience />
      <Blogs />
      <Contact/>
        {/* <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/blogs" element={<Blogs />} /> */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} /> */}
        {/* </Routes> */}
     {/* </Router> */}
    </div>
  );
}

export default App;

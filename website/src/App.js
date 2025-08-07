import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Home from "./pages";
import Design from "./pages/design.js";
import Resume from "./pages/resume.js";
import Contact from "./pages/contact.js";
import Uiux from "./pages/uiux.js";
import Navbar from './components/Navbar.js';

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const location = useLocation();
  const excludePaths = ['/'];

  return (
    <>
      {!excludePaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/uiux" element={<Uiux />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default AppWrapper;

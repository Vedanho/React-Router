import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";

import { Contact } from "./pages/Contact.page/Contactpage";
import { Main } from "./pages/Home.page/Main/Main";
import { Features } from "./pages/Features.page/Features";

function App() {
  let activeStyle = {
    color: "#fff",
    borderBottom: "0.25rem solid",
    textDecoration: "none",
  };

  return (
    <div className="App">
      <div className="Head">
        <span className="Cover">Cover</span>
        <div className="links">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/Features"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Features
          </NavLink>
          <NavLink
            to="/Contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contact
          </NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

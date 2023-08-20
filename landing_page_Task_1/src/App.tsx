import Navbar from "./componets/Navbar";
import Home from "./pages/Home/Home";
import "./App.css";
import About from "./pages/About/About";
import { Routes, Route } from "react-router-dom";
import Footer from "./componets/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import UpcomingConcerts from "./pages/UpcomingConcerts/UpcomingConcerts";
const App = () => {
  return (
    <>
      <header>
        <div className="navbar">
          <Navbar />
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/concert" element={<UpcomingConcerts />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;

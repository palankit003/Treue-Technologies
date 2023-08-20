import { useState } from "react";
import Style from "./Navbar.module.css";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <nav className={Style.navContainer}>
      {/* Logo */}
      <Link to="/" style={{ color: "black", textDecoration: "none" }}>
        <div className={Style.logoContainer}>
          <div className={Style.seven}>7</div>
          <div className={Style.logo}>ROCK</div>
          <div className={Style.seven}>7</div>
        </div>
      </Link>
      <div>
        <div className={Style.navMobile}>
          <div
            className={`${Style.hamburgerMenu} ${
              openNavbar ? Style.menuOpen : ""
            }`}
            onClick={() => setOpenNavbar(!openNavbar)}
          >
            <div className={Style.hamFirst}></div>
            <div className={Style.hamSecond}></div>
            <div className={Style.hamThird}></div>
          </div>
          {openNavbar ? (
            <div className={Style.mobileMenu}>
              <div className={Style.mobileMenuContainer}>
                <ul>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                    onClick={() => setOpenNavbar(!openNavbar)}
                  >
                    <li>
                      <p>Home</p>
                    </li>
                  </Link>
                  <Link
                    to="/about"
                    style={{ textDecoration: "none", color: "white" }}
                    onClick={() => setOpenNavbar(!openNavbar)}
                  >
                    <li>
                      <p>About</p>
                    </li>
                  </Link>
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "white" }}
                    onClick={() => setOpenNavbar(!openNavbar)}
                  >
                    <li>
                      <p>Contact</p>
                    </li>
                  </Link>
                  <Link
                    to="/concert"
                    style={{ textDecoration: "none", color: "white" }}
                    onClick={() => setOpenNavbar(!openNavbar)}
                  >
                    <li>
                      <p>Upcoming Concert</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className={Style.navLinksContainer}>
          <NavLink link="Home" title="Home" />
          <NavLink link="about" title="About" />
          <NavLink link="contact" title="Contact" />
          <NavLink link="concert" title="Upcoming Concert" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import "./Nav.css";
import gram from "./movie.png"

function Nav() {
  const [navbarBlack, setNavbarBlack] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNavbarBlack(true);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    // <nav className={`${navbarBlack && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src={gram}
        />
        <img
          className="nav__avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        />
        <p className="nav__link"><Link style={{ textDecoration: 'none',color: 'white',fontWeight: 'bold'}} to ="/watchlist">Watchlist</Link></p> 
      </div>
    // </nav>
  );
}

export default Nav;
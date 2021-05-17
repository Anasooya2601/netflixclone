import React, { useState, useEffect } from "react";
import "./Nav.css";
import gram from "./movie.svg"
import SearchForm from "./Searchbar";
function Nav({onResults}) {
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
    <nav className={`${navbarBlack && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src={gram}
        />
        <img
          className="nav__avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        />
        
        <SearchForm onResults={onResults} />
      </div>
    </nav>
  );
}

export default Nav;
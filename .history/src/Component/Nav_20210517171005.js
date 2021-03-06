// import React, { useState, useEffect } from "react";


// import "./Nav.css";
// import gram from "./movie.svg"
// import SearchForm from "./SearchForm";
// function Nav({onResults}) {
//   const [navbarBlack, setNavbarBlack] = useState(false);
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       setNavbarBlack(true);
//     });
//     return () => {
//       window.removeEventListener("scroll");
//     };
//   }, []);
//   return (
//     <nav className={`${navbarBlack && "nav__black"}`}>
//          <SearchForm onResults={onResults} />
//       <div className="nav__contents">
   
//         <img
//           className="nav__logo"
//           src={gram}
//         />
//         <img
//           className="nav__avatar"
//           src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
//         />
        
       
//       </div>
      
//     </nav>
//   );
// }

// export default Nav;
import React from "react";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";
import  "./Nav.css"
export default function Navbar({ onResults }) {
  return (
    <>
   <nav>   
{/* <SearchForm onResults={onResults} /> */}
    {/* <header className="w-full shadow-lg bg-gray-700  items-center h-16 rounded-2xl z-40 mb-10">
      <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center"> */}
        {/* <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0"> */}
          <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full ">
  
            <div className="relative flex items-center w-full lg:w-54 h-full group ">
              {/* <div className="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                <svg
                  className="absolute left-0 z-20  w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
              </div> */}
              {/* <svg
                className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              > */}
                {/* <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg> */}
              
              <SearchForm onResults={onResults} />
             
            </div>
            
          </div>
        </nav>
          {/* <div className="relative p-2 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto"> */}
            <div className="block relative flex item-center ">
              <Link to="/">
                {/* <img
                  alt="profil"
                  src="/play.svg"
                  className="mx-auto object-cover rounded-full h-12 w-12 "
                /> */}
              </Link>
            </div>
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    {/* </header> */}
    </>
  );
}
import React from "react";
import { api } from "./config";

export default function SearchForm({ onResults }) {
  const handleChange = (e) => {
    if (e.target.value !== "") {
      fetch(api.search(e.target.value))
        .then((res) => res.json())
        .then((myJson) => {
          onResults(myJson.results);
        });
    }
  };

  return (
    <>
      <input
        type="text"
        top="0"
        padding="20px"
        className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:white-500 ring-opacity-90 bg-white-800 text-gray-400 aa-input"
        placeholder="Search"
        onChange={(e) => handleChange(e)}
      />
    </>
  );
}

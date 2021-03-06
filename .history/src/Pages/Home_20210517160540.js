import React, { useState, useEffect } from "react";
import Loading from "../Component/Loading";
import Navbar from "../Component/Nav";
import NotResults from "../Component/NotResults";
import Container from "../Component/container";
import { api } from "../Component/config";




export default function Home() {
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);
  const [usedSearch, setusedSearch] = useState(false);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    fetch(api.home)
      .then((response) => response.json())
      .then((myJson) => {
        setData(myJson.results);
      })
      .catch((error) => console.log(error));
  };

  const handleResults = (results) => {
    setusedSearch(true);
    setResults(results);
  };

  const renderResults = () => {
    return results === "" ? (
    <NotResults/>
    ) : (
      <Container results={results} search={true} />
    );
  };

  return (
    <div className="w-full bg-gray-900 p-12 overflow-auto h-screen">
   
      <Navbar onResults={handleResults} />
      {usedSearch ? (
        renderResults()
      ) : data.length > 0 ? (
        <Container data={data} search={false} />
      ) : (
       <Loading/>
      )}
    </div>
  );
}
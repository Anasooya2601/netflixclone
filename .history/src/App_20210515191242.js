import React from "react"
import './App.css';
import Row from './Component/Row';
import requests from ''
function App() {
  return (
    <div className="App">
   
      
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>

    </div>
  );
}

export default App;

// 8262e8a2c4616577fb09b8ec34bd1d61//https://api.themoviedb.org/3/movie/550?api_key=8262e8a2c4616577fb09b8ec34bd1d61
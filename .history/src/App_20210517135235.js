import React from "react";
import "./App.css";
import Row from "./Component/Row";
import requests from "./requests";
import Banner from "./Component/Banner";
import Nav from "./Component/Nav";
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'
import Search from "./Component/Searchbar";
function App() {
  return (
    <Router>
      
    <Nav/>
    <Switch>
    <Route  path="/search"><Search/></Route>
 
    <div className="app">

      <Nav title="Trending now" />
      <Banner />
      <Row
        isLargeRow
        title="Movieflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
    </Switch>

</Router>

  );
}

export default App;

// 8262e8a2c4616577fb09b8ec34bd1d61//https://api.themoviedb.org/3/movie/550?api_key=8262e8a2c4616577fb09b8ec34bd1d61
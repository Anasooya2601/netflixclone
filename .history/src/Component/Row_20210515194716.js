import React,{useState,useEffect} from 'react'
import axios from "../axios"

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl}) {
    //useState is short term memory

    const [movies,setMovies]=useState([])
    useEffect(() =>{
async function fetchData(){
const request=await axios.get(fetchUrl)
setMovies(request.data.results)
return request;
}fetchData()
    },[fetchUrl] )
    console.table(movies)
    return (
        <div className="row">
           <h2>{title}</h2> 
 {/* container + posters */}
<div className="rows__posters">
    {/* several row poster */}
    {movies.map(movie=>(
        <img src={ `${base_url} ${movie.poster_path}`} alt={"movie.name"} srcset="" />
))}
</div>
</div>

   
       
    )
}

export default Row

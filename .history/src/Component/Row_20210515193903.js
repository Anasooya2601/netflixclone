import React,{useState,useEffect} from 'react'
import axios from "../axios"
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
    console.log(movies)
    return (
        <div className="row">
           <h2>{title}</h2> 
 {/* container + posters */}
<div className="rows__posters">
    {/* several row poster */}
    {movies.map()}
</div>
</div>

   
       
    )
}

export default Row

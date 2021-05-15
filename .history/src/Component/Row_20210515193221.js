import React,{useState,useEffect} from 'react'
import axios from "../axios"
function Row({title,fetchUrl}) {
    //useState is short term memory

    const [movies,setMovies]=useState([])
    useEffect(() =>{
async function fetchData(){
const request=await axios.get(fetchUrl)
console.log(request)
}fetchData()
    },[] )
    return (
        <div>
           <h2>{title}</h2> 
 {/* container + posters */}


   
        </div>
    )
}

export default Row

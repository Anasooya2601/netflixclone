import React,{useState} from 'react'

function Row({title}) {
    //useState is short term memory
    
    const [movies,setMovies]=useState([])
    return (
        <div>
           <h2>{title}</h2> 
 {/* container + posters */}


   
        </div>
    )
}

export default Row

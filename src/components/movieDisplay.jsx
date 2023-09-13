import React, { useEffect } from "react";


const MovieDisplay = ({movie}) => {
    
    const loaded =()=>{
        return ( 
            <>
            <h1>{movie.title}</h1>
            <h2>{movie.Genre}</h2>
            <h2>{movie.Year}</h2>
            </>
         );
    };
    const loading =() =>{
    return <h1>No movie to display.</h1>
    };
    return movie? loaded(): loading();
    
};
 
export default MovieDisplay;
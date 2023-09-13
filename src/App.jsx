import { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"
import MovieDisplay from './components/movieDisplay';
import Form from './components/form';

const App = () => {
  const apiKey = "bdfb4829";
  const [movie, setMovie] =useState(null);
  const getMovie = async(searchTerm) => {
    try{
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      )
      const data = await response.json();
      setMovie(data)
    }catch(e){
      console.error(e)
    }
   
  };
  useEffect(()=>{getMovie("Clueless")},[])

  

  return (
    <div className='App'>
      <Form moviesearch ={getMovie} />
      <MovieDisplay movie={movie}/>   
    </div>
  );
};

export default App;

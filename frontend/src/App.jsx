import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import Navbar from './componets/navbar';
import { Movies } from './context/context';



// react component cannot be an async function

export default function App() {
  const [movies, setMovies] = useState([]);
  const [favmovies, setfavmovies] = useState([]);



  
  useEffect(()=>{
    
      const storedfav = localStorage.getItem('favorites')
      if (storedfav) {

        setfavmovies(JSON.parse(storedfav))
      }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5002/api/movies');
      const data = await response.json();
      setMovies(data);
      console.log('hey ', movies);
    }

    fetchData();
  }, []);


  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favmovies))

    // runs when favmovies updates

  }, [favmovies])

  return (
    <div>
      <Movies.Provider value={{ favmovies, setfavmovies, movies, setMovies }}>
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </Movies.Provider>



    </div>
  );
}
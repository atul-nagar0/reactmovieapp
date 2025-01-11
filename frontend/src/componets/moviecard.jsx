import React from 'react'
import { Heart } from 'lucide-react';

import '../css/home.css';



function Moviecard({movies}) {
  
      
      return (
          <div className='home'>
              
              
                  
                  {/* change colour of heart to red on click and clicking again to null and remove from favmovies array */}
                  {movies.map((movie, index) => (
                      <div className='movie-card' key={index}>
                          {/* {console.log(fav)} */}
                          <Heart onClick={()=>handlefavourite(movie)} fill={(favmovies.includes(movie))?'red':''} className='Heart'  size={24} />
                          <img src={movie.poster} width={200} alt={movie.title} /> 
                          <p className='title'>{movie.title}</p>
                          {/* <p>{movie.description}</p> */}
                          
  
                      </div>
                  ))}
              
              
          </div>
)}

export default Moviecard

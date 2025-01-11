import React, {useContext} from 'react';
import {Movies} from '../context/context';
import { Heart } from 'lucide-react';
import '../css/home.css';

const Favourite = () => {
    const {favmovies, setfavmovies} = useContext(Movies);
    
    console.log(favmovies);

    const removeFavorite = (index) => {
        const favMovies = [...favmovies]
        favMovies.splice(index, 1);
        setfavmovies([...favMovies]);
    }
  
  //  make an general movie context store movies id instead
    
    return (
        favmovies.length > 0 ? (
          <div className='home'>
            {favmovies.map((movie, index) => (
              <div className='movie-card' key={index}>
                <Heart onClick={() => removeFavorite(index)} fill='red' className='Heart' size={24} />
                <img src={movie.poster} width={200} alt={movie.title} />
                <p className='title'>{movie.title}</p>
              </div>
            ))}
          </div>
        ) : (
          <div style={{textAlign:'center'}}>
            <h1>NO FAVOURITES MOVIES</h1>
            <br />
            <h3>Start adding your favourite movies</h3>
          </div>
        )
      );
};

export default Favourite;
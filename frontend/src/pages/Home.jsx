import {useState, useContext, useEffect} from 'react';
import '../css/home.css';
import { Heart } from 'lucide-react';
import { Movies } from '../context/context';




function Home({movies}) {
    
    const {favmovies, setfavmovies} = useContext(Movies);
    
    console.log(movies)
    
   

    const handlefavourite = (movie) =>{
        
        if(favmovies.some((favmovie)=> favmovie._id === movie._id)){
            setfavmovies(favmovies.filter((x)=> {return x._id !== movie._id}))
        }

        else{
            setfavmovies((p)=>[...p, movie])
        }
    }
    
    return (
        <div className='home'>
        {movies.length >= 1?(
            
            
                
                
                
                    movies.map((movie, index) => (
                    <div className='movie-card' key={index}>
                        {/* {console.log(fav)} */}
                        <Heart onClick={() => handlefavourite(movie)} fill={favmovies.some((favmovie) => favmovie._id === movie._id)?'red':''} className='Heart'  size={24} />
                        <img src={movie.poster} width={200} alt={movie.title} />
                        <p className='title'>{movie.title}</p>
                        {/* <p>{movie.description}</p> */}
                        

                    </div>
                ))
            
            
        ):
        (
            <div>
                <img src="/download.jpg" alt="not found" />
            </div>
        )}
        </div>
    );
}

export default Home;


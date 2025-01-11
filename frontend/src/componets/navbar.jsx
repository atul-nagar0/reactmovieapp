import React,{useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import { Movies } from '../context/context';

const Navbar = () => {
    const {setMovies} = useContext(Movies)
    const [search, setsearch] = useState('')

    const handleclick = (e) =>{
      // e.preventdefault()
      setsearch(e.target.value)
    } 

    const handlesubmit = async (e) =>{
      e.preventDefault();
      // alert(search);
      try {
        const response = await fetch(`http://localhost:5002/api/movies/${search}`)
        const data = await response.json()
        setMovies(data);
        
      } catch (err) {
          console.log(err.message)
      }
    }

    const fetchData = async () => {
      const response = await fetch('http://localhost:5002/api/movies');
      const data = await response.json();
      setMovies(data);
      
    }

    return (
        <>
        <div className="navbar">
        <h3 className='logo' onClick={fetchData}>Movie App</h3>
        <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/favourite'>Favourite </Link></li>
        </ul>
      </nav>
      </div>
      <div className="search-container">
      <input value={search} onChange={handleclick} type="text" name="" placeholder="search your Movie..." />
    <button onClick={(e)=>handlesubmit(e)}>Search</button>  
    </div>
        </>
    );
};

export default Navbar;
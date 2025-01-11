import {Router} from 'express';
import Movie from '../src/model/movie.model.js';
import connect from '../src/db/connectionScript.js';

connect();

async function getMovies(req, res) {
    try {
        const movies = await Movie.find({$and:[{poster:{$exists:true}}, {year:{$gt: 2013}}]}).limit(100);
        
        res.json(movies);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function searchmovie(req, res) {
    try{
        // console.log(req.params.movie)
        const movies = await Movie.find({ title: { $regex: req.params.movie, $options: 'i' } });
        // console.log(typeof(movies))
        res.json(movies) //res.json(data) sends stringify data which is then coverted to to js object by response.json()
    }
    catch(err){
        res.status(500).send(err.message)
    }
}

const router = Router();

router.get('/', getMovies);
router.get('/:movie', searchmovie)

export default router;
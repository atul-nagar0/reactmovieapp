import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    runtime: Number,
    genres: [String],
    director: String,
    cast: [String],
    plot: String,
    poster: String
  });  // Explicitly specify the collection name 

movieSchema.index({ title:'text' }) 
  
const Movie = mongoose.model('Movie', movieSchema);

export default Movie;  
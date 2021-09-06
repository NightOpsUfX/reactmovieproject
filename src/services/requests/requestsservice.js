
import axios from 'axios';

let baseURL = 'https://api.themoviedb.org/3/';
let apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmMwOWNiMzE5YjE5YTAwNGU4OTljOTllZTc1YjE5NSIsInN1YiI6IjYxMzQ2NjJkNjRmNzE2MDA4YzQ3NjFjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tU29NnM52WBO9ritKX9LIRgtoQT39R0Gn7l9gUvjESA';
let axiosInstance = axios.create({
    baseURL: `${baseURL}`,
    headers: {
        Authorization: `Bearer ${apiToken}`
    }
});

//get all movies
const getMovies = async () => await axiosInstance.get('/discover/movie');

//get single movie by id
const getSingleMovie = async (movie_id) => await axiosInstance.get(`/movie/${movie_id}`);

//get all genres
const getGenres = async () => await axiosInstance.get('/genre/movie/list');

// find movie by word
const findMovieByWord = async (searchWord) => {
    let results = await axiosInstance.get(`/search/movie?query=${searchWord}`);
    return results
}

// find all movies by genre
const findMoviesByGenre = async (genreIdArray, pageNumber = 1) => {
    let results =  await axiosInstance.get(`discover/movie?with_genres=${genreIdArray}&page=${pageNumber}`);
        return results
    }

export {getMovies, getGenres, getSingleMovie, findMovieByWord, findMoviesByGenre}
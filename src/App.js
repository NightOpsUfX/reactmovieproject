import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import {
    findMoviesByGenre,
    findMovieByWord,
    getGenres,
    getMovies,
    getSingleMovie
} from "./services/requests/requestsservice";
import {useDispatch, useSelector} from "react-redux";
import {loadMoviesActionCreate} from "./redux/actionCreators";

export default function App() {
    let { results } = useSelector(({ moviesResponse }) => moviesResponse);
    let dispatch = useDispatch()

    useEffect(() => {
        getMovies().then(value => dispatch(loadMoviesActionCreate(value)));
    }, [])

  return (
    <div className="App">
      <header className="App-header">
            <div>
                <form>
                    <input type="text" placeholder="movie title"/>
                    <button>submit</button>
                </form>
            </div>

      </header>

            {
              results
                  ? results.map(value => <div key={value.id}>{value.title}</div>)
                  : <div>Loading...</div>
            }
    </div>
  );
}



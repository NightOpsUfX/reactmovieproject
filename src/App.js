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
    let state = useSelector(state => state);
    let dispatch = useDispatch()
    let startRenderMovies = state.moviesResponse.results

    // console.log('state', state)
    // console.log('first render', startRenderMovies)

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

            {/*{*/}
            {/*    startRenderMovies.map(value => <div>{value.title}</div>)*/}
            {/*}*/}
    </div>
  );
}



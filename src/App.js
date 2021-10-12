import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {getMovies, getGenres, getSingleMovie, getMovieByWord, getMoviesByGenre} from "./services/requests/requestsservice";
import {useDispatch, useSelector} from "react-redux";
import {loadMoviesActionCreate, searchMovieTitleActionCreate} from "./redux/actionCreators";

export default function App() {
    let dispatch = useDispatch()
    let moviesData = useSelector((state) => state.moviesResponse);
    let {results} = useSelector(({ moviesResponse }) => moviesResponse);
    let totalPages = moviesData.total_pages;
    // console.log(totalPages)


    // let [pagesTempArray, setPagesTempArray] = useState([]);
    // // console.log(pagesTempArray)
    // if(moviesData.total_pages){
    //     let totalPages = moviesData.total_pages;
    //
    //     function createPages (totalPages) {
    //         let pages = (totalPages) => {
    //             let pagesArray = [];
    //             for(let i = 1; i < totalPages + 1; i++) {
    //                 pagesArray.push(i)
    //             }
    //             // console.log(pagesArray)
    //             return pagesArray
    //         }
    //         // pages(totalPages)
    //         setPagesTempArray(pages)
    //     }
    //     createPages (totalPages)
    // }
    //
    //     // pages(moviesData.total_pages)



    let myPagesResult = []
    if(totalPages !== undefined) {
        function getPages(totalPages) {
            let pagesArray = [];
            for (let i = 1; i < totalPages + 1; i++) {
                pagesArray.push(i);
            }
            return pagesArray;
        }
        myPagesResult = getPages(totalPages);
    }
    console.log('my pages result', myPagesResult)

    //first render
    useEffect(() => {
        getMovies().then(value => dispatch(loadMoviesActionCreate(value)));
    }, [])
    //end first render

    // Search by Title
    let [searchFormState, setSearchFormState] = useState('');

    let formInputChange = (e) => {
        e.preventDefault();
        setSearchFormState(e.target.value);
    }
    let findMovieByTitle = (e) => {
        e.preventDefault();
        getMovieByWord(searchFormState).then(value => dispatch(searchMovieTitleActionCreate(value)));
    }
    // End Search by Title

  return (
    <div className="App">
      <header className="App-header">
            <div>
                <form onSubmit={findMovieByTitle}>
                    <input
                        type="text"
                        name={'movieSearchTitle'}
                        value={searchFormState}
                        placeholder={'Enter movie title'}
                        onChange={formInputChange}
                    />
                    <button>submit</button>
                </form>
            </div>

      </header>
        <div>
            <div className={'genresWrapper'}>

            </div>
            <div className={'moviesWrapper'}>
                <div>
                    {
                        results
                            ? results.map(value => <div key={value.id}>{value.title}</div>)
                                : <div>Loading...</div>
                    }
                </div>
                <div className={'pagesButtons'}>
                    {
                        myPagesResult
                            ? myPagesResult.map(value => <span>{value} </span>)
                                :<div>Loading...</div>
                    }


                </div>

            </div>
        </div>


    </div>
  );
}



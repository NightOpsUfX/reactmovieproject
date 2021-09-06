import {LOAD_MOVIES, SEARCH_MOVIE_BY_TITLE} from "./actions";

const loadMoviesActionCreate = (payload) => {
    return {type: LOAD_MOVIES, payload}
}

const searchMovieTitleActionCreate = (payload) => {
    return {type: SEARCH_MOVIE_BY_TITLE, payload}
}

export {loadMoviesActionCreate, searchMovieTitleActionCreate}
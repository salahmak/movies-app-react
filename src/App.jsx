import { useEffect, useState, useCallback } from "react";
import CardsWrapper from "./components/CardsWrapper/CardsWrapper";
import SearchContainer from "./components/Search/SearchContainer";
import Title from "./components/Title/Title";

import queryString from "query-string"

const API_URL =
    "https://www.omdbapi.com?apikey=" + process.env.REACT_APP_API_KEY;

const App = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("spider man");

    // a function that takes a title query and sets movies state
    // to the result
    const searchMovies = useCallback(async (query="spider man") => {
        try {
            //preparing
            const title = query.trim().toLowerCase();

            //making request
            const res = await fetch(`${API_URL}&s=${title}`);
            const data = await res.json();

            //setting state with result
            setMovies(data.Search.filter((movie) => movie.Poster !== "N/A"));
        } catch (err) {
            setMovies([]);
            console.log(err);
        }
    }, [])


    

    useEffect(() => {
        const parsedUrl = queryString.parse(window.location.search);
        if("query" in parsedUrl)
        {
            if(parsedUrl.query){
                searchMovies(parsedUrl.query);
                setQuery(parsedUrl.query);
                return;
            }
            return;
        }
        searchMovies();
    }, [searchMovies]);




    return (
        <div className="overflow-scroll bg-gray-900 w-screen h-screen">
            <Title />
            <SearchContainer searchMovies={searchMovies} query={query} setQuery={setQuery}/>
            <CardsWrapper movies={movies} />
        </div>
    );
};

export default App;

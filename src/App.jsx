import { useEffect, useState } from "react";
import CardsWrapper from "./components/CardsWrapper/CardsWrapper";
import SearchContainer from "./components/Search/SearchContainer";
import Title from "./components/Title/Title";

const API_URL =
    "https://www.omdbapi.com?apikey=" + process.env.REACT_APP_API_KEY;

const App = () => {
    const [movies, setMovies] = useState([]);

    // a function that takes a title query and sets movies state
    // to the result
    const searchMovies = async (title) => {
        try{
            const res = await fetch(`${API_URL}&s=${title}`);
            
            const data = await res.json();
            setMovies(data.Search.filter(movie=> movie.Poster !== "N/A"));
        }catch(err){
            setMovies([]);
            console.log(err)
        }
    };

    useEffect(() => {
        searchMovies("spider man");
    }, []);

    return (
        <div className="overflow-scroll bg-gray-900 w-screen h-screen">
            {/* //TODO? Title */}
            <Title />
            {/* //TODO? Search */}
            <SearchContainer searchMovies={searchMovies} />

            {/* //TODO? CardsWrapper */}
            <CardsWrapper movies={movies}/>


            {/* //TODO Make search bar work */}
        </div>
    );
};

export default App;

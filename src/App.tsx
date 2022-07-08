import { useEffect, useState, useCallback } from "react";
import CardsWrapper from "./components/CardsWrapper/CardsWrapper";
import SearchContainer from "./components/Search/SearchContainer";
import Title from "./components/Title/Title";
import queryString from "query-string";
import Movie from "./Types";

const API_URL =
    "https://www.omdbapi.com?apikey=" + process.env.REACT_APP_API_KEY;

const App: React.FC = (): JSX.Element => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [query, setQuery] = useState<string>("spider man");

    // a function that takes a title query and sets movies state
    // to the result
    const searchMovies = useCallback(
        async (query = "spider man"): Promise<void> => {
            try {
                //preparing
                const title = query.trim().toLowerCase();

                //making request
                const res = await fetch(`${API_URL}&s=${title}`);
                const data = await res.json();

                //setting state with result
                setMovies(


                    /** the Movies fetching API returns an array with many properties, so we map it to only bring the ones we need (title, poster, year, type, imdbId)
                     * 
                     * The data.Search.map() function takes a callback function with has a Movie object and returns a Movie object
                     * 
                     * the cascaded .filter() function removes the Movie objects which have Poster property set to "N/A" to filter the movies that don't have a poster from the array returned by .map()
                    */
                    data.Search.map(({ Title, Year, Poster, Type, imdbID }: Movie) : Movie => {
                        return { Title, Year, Poster, Type, imdbID };
                    }).filter((m: any) => m.Poster !== "N/A")
                );
            } catch (err) {
                setMovies([]);
                console.log(err);
            }
        },
        []
    );

    useEffect((): void => {
        const parsedUrl: any = queryString.parse(window.location.search);
        if ("query" in parsedUrl) {
            if (parsedUrl.query) {
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
            <SearchContainer searchMovies={searchMovies} query={query} />
            <CardsWrapper movies={movies} />
        </div>
    );
};

export default App;

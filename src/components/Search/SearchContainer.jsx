import { FaSearch } from "react-icons/fa";
import {createBrowserHistory} from "history"

const history = createBrowserHistory();

const SearchContainer = ({ searchMovies, query, setQuery }) => {

    const enterEvent = (e) => {
        if (e.key === "Enter" && query.length > 0) {
            history.push(`/?query=${query}`, {some: "state"});
            searchMovies(query);
        }
    };

    const clickEvent = (e) => {
        if (query.length > 0) {
            searchMovies(query);
        }
    };

    return (
        <div className="p-8 w-screen flex justify-center content-center">
            <input
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                onKeyDown={(e) => enterEvent(e)}
                placeholder="Search"
                className="bg-gray-600 filter-none p-4 w-screen md:w-9/12 lg:w-9/12  sm:w-screen rounded-3xl rounded-r-none shadow-gray-800 shadow-sm text-gray-400 focus:outline-none"
                type="text"
            />
            <button
                onClick={(e) => clickEvent(e)}
                className="p-5 bg-gray-600 rounded-r-3xl text-gray-400"
            >
                <FaSearch />
            </button>
        </div>
    );
};

export default SearchContainer;

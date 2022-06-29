import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {createBrowserHistory} from "history"

const history = createBrowserHistory();

const SearchContainer = ({ searchMovies, query }) => {

    const [searchInput, setSearchInput] = useState("");

    const enterEvent = (e) => {
        if (e.key === "Enter" && query.length > 0) {
            history.push(`/?query=${searchInput}`, {some: "state"});
            searchMovies(searchInput);
        }
    };

    const clickEvent = () => {
        if (query.length > 0) {
            searchMovies(searchInput);
        }
    };

    return (
        <div className="p-8 w-screen flex justify-center content-center">
            <input
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
                onKeyDown={(e) => enterEvent(e)}
                placeholder="Search"
                className="bg-gray-600 filter-none p-4 w-screen md:w-9/12 lg:w-9/12  sm:w-screen rounded-3xl rounded-r-none shadow-gray-800 shadow-sm text-gray-400 focus:outline-none"
                type="text"
            />
            <button
                onClick={clickEvent}
                className="p-5 bg-gray-600 rounded-r-3xl text-gray-400"
            >
                <FaSearch />
            </button>
        </div>
    );
};

export default SearchContainer;

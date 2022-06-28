import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <>
      <input placeholder="Search" className="bg-gray-600 filter-none p-4 w-screen md:w-9/12 lg:w-9/12  sm:w-screen rounded-3xl rounded-r-none shadow-gray-800 shadow-sm text-gray-400 focus:outline-none" type="text" />
      <button className="p-5 bg-gray-600 rounded-r-3xl text-gray-400">
        <FaSearch />
      </button>
    </>
  );
};

export default SearchBar;

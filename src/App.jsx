import { useEffect } from "react"
import SearchContainer from "./components/Search/SearchContainer"
import Title from "./components/Title/Title"

const API_URL = "https://www.omdbapi.com?apikey=" + process.env.REACT_APP_API_KEY

const App = () => {

    
    useEffect(()=>{
        console.log(API_URL)
    },[])

    return (
        <div className="overflow-hidden bg-gray-800 w-screen h-screen">
            {/* //TODO? Title */}
            <Title />
            {/* //TODO? Search */}
            <SearchContainer />

            
            {/* //TODO CardsWrapper */}


        </div>
    )
}

export default App






// const searchMovies = async (title) => {
//     const res = await fetch(`${API_URL}&s=${title}`)

//     const data = await res.json();

//     console.log(data.search)
// }
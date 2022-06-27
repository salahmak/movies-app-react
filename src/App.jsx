import { useEffect } from "react"

const API_URL = "https://www.omdbapi.com?apikey=" + process.env.REACT_APP_API_KEY

const App = () => {

    
    useEffect(()=>{
        console.log(API_URL)
    },[])

    return (
        <div className="bg-gray-900 w-screen h-screen">
            {/* //TODO Title */}
            {/* //TODO Search */}
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
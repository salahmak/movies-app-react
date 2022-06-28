import Card from "./Card"

const CardsWrapper = ({movies}) => {



    return (
        <div className="flex flex-wrap justify-center content-center gap-5 p-5">
            {movies.map((({Title, Year, Poster, Type}) => {
                return <Card title={Title} type={Type} year={Year} url={Poster} />
            }))}
        </div>
    )
}


export default CardsWrapper
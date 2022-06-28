import Card from "./Card";

const CardsWrapper = ({ movies }) => {
    return (
        <div className="flex flex-wrap justify-center content-center gap-5 p-5">
            {movies.length === 0 ? (
                <div>No results</div>
            ) : (
                movies.map(({ Title, Year, Poster, Type, imdbID }) => {
                    return (
                        <Card
                            title={Title}
                            type={Type}
                            year={Year}
                            url={Poster}
                            key={imdbID}
                        />
                    );
                })
            )}
        </div>
    );
};

export default CardsWrapper;

import Card from "./Card";
import Movie from "../../Types";

interface CardsWrapperProps {
    movies: Movie[];
}

const CardsWrapper: React.FC<CardsWrapperProps> = ({ movies }) : JSX.Element => {
    return (
        <div className="flex flex-wrap justify-center content-center gap-5 p-5">
            {movies.length === 0 ? (
                <div className="text-gray-400">No results</div>
            ) : (
                movies.map((movie: Movie) => {
                    return (
                        <Card
                            movie={movie}
                            key={movie.imdbID}
                        />
                    );
                })
            )}
        </div>
    );
};

export default CardsWrapper;

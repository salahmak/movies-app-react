import Movie from "../../Types"


interface CardProps {
    movie: Movie;
}

const Card: React.FC<CardProps> = ({ movie: {Title, Type, Year, Poster} }) => {
    return (
        <div className="flex flex-col-reverse content-center justify-start w-screen xs:w-80 bg-gray-600 h-128 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gray-300 hover:border-2">
            <div className="w-full h-fit p-4 text-gray-400 font-bold font-sans">
                <h3 className="block uppercase">{Type}</h3>
                <p>
                    {Title} - {Year}
                </p>
            </div>
            <img src={Poster} className="w-full h-full" alt={Title} />
        </div>
    );
};

export default Card;

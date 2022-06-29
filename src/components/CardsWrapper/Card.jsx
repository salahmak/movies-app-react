const Card = ({ title, type, year, url }) => {
    return (
        <div className="flex flex-col-reverse content-center justify-start w-screen xs:w-80 bg-gray-600 h-128 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gray-300 hover:border-2">
            <div className="w-full h-fit p-4 text-gray-400 font-bold font-sans">
                <h3 className="block uppercase">{type}</h3>
                <p>
                    {title} - {year}
                </p>
            </div>
            <img src={url} className="w-full h-full" alt={title} />
        </div>
    );
};

export default Card;

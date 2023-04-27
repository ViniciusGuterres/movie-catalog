import './MovieCard.css';

export default function MovieCard({
    imgEndPoint,
    backdropPath,
    name,
    description,
    voteAverage,
    releaseDate,
    movieCardOnClickFunction
}) {
    const movieObj = {
        imgEndPoint,
        backdropPath,
        name,
        description,
        voteAverage,
        releaseDate
    };

    const buildCardInformation = () => {
        let descriptionSliced = description;

        if (description.length > 233) {
            descriptionSliced = `${description.slice(0, 233)}...`;
        }

        return (
            <div className="movie-card-container">
                <div className="movie-card-sub-container">
                    <div className="movie-name-and-vote-container">
                        <span className="movie-title">
                            {name}
                        </span>

                        <strong className="movie-vote">
                            {voteAverage}
                        </strong>
                    </div>

                    <div className='description-container'>
                        <p>
                            {descriptionSliced}
                        </p>
                    </div>

                    <button onClick={() => movieCardOnClickFunction(movieObj)} >
                        Detalhes
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <img
                src={`https://image.tmdb.org/t/p/w300/${imgEndPoint}`}
                onClick={() => movieCardOnClickFunction(movieObj)}
            />

            {buildCardInformation()}
        </div>
    )
}
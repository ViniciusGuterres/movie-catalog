import { useState } from "react";
import './MovieCard.css';

export default function MovieCard({
    imgEndPoint,
    backdropPath,
    name,
    description,
    voteAverage,
    movieCardOnClickFunction
}) {
    const movieObj = {
        imgEndPoint,
        backdropPath,
        name,
        description,
        voteAverage
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

                        <strong className="movie-vote">{voteAverage}</strong>
                    </div>

                    <p>
                        {descriptionSliced}
                    </p>

                    <button>
                        Detalhes
                    </button>
                </div>
            </div>
        )
    }

    const clickAtMovieImg = () => {
        const movieTrailerUrl = `https://www.youtube.com/results?search_query=${name}trailer}`

        window.open(movieTrailerUrl);
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
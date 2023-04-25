import './MoviesList.css';

import MovieCard from '../MovieCard/MovieCard.jsx';

export default function MoviesList({ movies, genderTitle, movieCardOnClickFunction }) {
    const dictionaryObj = {
        'action': 'Ação',
        'originals': 'Originais',
        'toprated': 'Mais assistidos',
        'comedy': 'Comédia'
    }

    const buildMoviesList = () => {
        const moviesCardsElementsArray = [];

        for (let i = 0; i < movies.length; i++) {
            const {
                original_title,
                adult,
                vote_average,
                overview,
                poster_path,
                backdrop_path,
                id
            } = movies[i];

            // Don't push adult gender movies and without overview
            if (!adult && overview) {
                moviesCardsElementsArray.push(
                    <MovieCard
                        key={`MovieCard_${id}`}
                        name={original_title}
                        imgEndPoint={poster_path}
                        backdropPath={backdrop_path}
                        description={overview}
                        voteAverage={vote_average}
                        movieCardOnClickFunction={movieCardOnClickFunction}
                    />
                );
            }
        }

        return (
            <div className='list-main-container'>
                <span className='list-title'>
                    {dictionaryObj[genderTitle]}
                </span>

                <div className='movies-list-container'>
                    {moviesCardsElementsArray.slice(8)}
                </div>
            </div>
        )
    }

    return (
        <div>
            {buildMoviesList()}
        </div>
    );
}
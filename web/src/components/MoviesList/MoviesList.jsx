import './MoviesList.css';

import MovieCard from '../MovieCard/MovieCard.jsx';

export default function MoviesList({ movies, genderTitle }) {
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
                id
            } = movies[i];

            if (!adult && overview) {
                moviesCardsElementsArray.push(
                    <MovieCard
                        key={`MovieCard_${id}`}
                        name={original_title}
                        imgEndPoint={poster_path}
                        description={overview}
                        voteAverage={vote_average}
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
import './MoviesList.css';

import MovieCard from '../MovieCard/MovieCard.jsx';
import { useState } from 'react';

export default function MoviesList({ movies, genderTitle, movieCardOnClickFunction }) {
    const [moviesOrderBy, setMoviesOrderBy] = useState('voteAverageDesc');

    const dictionaryObj = {
        'action': 'Ação',
        'originals': 'Originais',
        'toprated': 'Mais assistidos',
        'comedy': 'Comédia'
    };

    const moviesOrderByOptions = {
        nameDesc: 'Ordenar por ordem alfabética - decrescente',
        nameAsc: 'Ordenar por ordem alfabética - crescente',
        voteAverageDesc: 'Ordenar por melhor nota',
        voteAverageAsc: 'Ordenar por pior nota',
        releaseDateDesc: 'Ordenar por ordem de lançamento - decrescente',
        releaseDateAsc: 'Ordenar por ordem de lançamento - crescente',
    };

    const handleChangeOrderFilter = event => {
        setMoviesOrderBy(event?.target?.value);
    }

    const buildMoviesList = () => {
        const moviesCardsElementsArray = [];

        // Sorting the movie list
        const moviesListSorted = movies.sort((movieA, movieB) => {
            const movieAName = movieA.title?.toLowerCase() || '';
            const movieBName = movieB?.title?.toLowerCase() || '';

            const movieAVoteAverage = movieA?.vote_average || 0;
            const movieBVoteAverage = movieB?.vote_average || 0;

            const movieAReleaseDate = movieA?.release_date ? new Date(movieA.release_date) : 0;
            const movieBReleaseDate = movieB?.release_date ? new Date(movieB.release_date) : 0;

            // Case is sorted by name ASC
            if (moviesOrderBy === 'nameDesc') {
                if (movieAName < movieBName) return -1;
                if (movieA > movieBName) return 1;

                return 0;
            }
            // Case is sorted by name DESC
            if (moviesOrderBy === 'nameAsc') {
                if (movieAName > movieBName) return -1;
                if (movieA < movieBName) return 1;

                return 0;
            }

            // Case is sorted by vote average Desc
            if (moviesOrderBy === 'voteAverageDesc') {
                if (movieAVoteAverage > movieBVoteAverage) return -1;
                if (movieAVoteAverage < movieBVoteAverage) return 1;

                return 0;
            }

            // Case is sorted by vote average Asc
            if (moviesOrderBy === 'voteAverageAsc') {
                if (movieAVoteAverage < movieBVoteAverage) return -1;
                if (movieAVoteAverage > movieBVoteAverage) return 1;

                return 0;
            }

            // Case is sorted by vote release date Desc
            if (moviesOrderBy === 'releaseDateDesc') {
                if (Number(movieAReleaseDate) > Number(movieBReleaseDate)) return -1;
                if (Number(movieAReleaseDate) < Number(movieBReleaseDate)) return 1;

                return 0;
            }

            // Case is sorted by vote release date Asc
            if (moviesOrderBy === 'releaseDateAsc') {
                if (Number(movieAReleaseDate) < Number(movieBReleaseDate)) return -1;
                if (Number(movieAReleaseDate) > Number(movieBReleaseDate)) return 1;

                return 0;
            }
        });

        for (let i = 0; i < moviesListSorted.length; i++) {
            const {
                title,
                adult,
                vote_average,
                overview,
                poster_path,
                backdrop_path,
                id,
                release_date
            } = movies[i];

            // Don't push adult gender movies and without overview
            if (!adult && overview) {
                moviesCardsElementsArray.push(
                    <MovieCard
                        key={`MovieCard_${id}`}
                        name={title}
                        imgEndPoint={poster_path}
                        backdropPath={backdrop_path}
                        description={overview}
                        voteAverage={vote_average}
                        movieCardOnClickFunction={movieCardOnClickFunction}
                        releaseDate={release_date}
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

    const buildMovieOrderSelectElement = () => {
        const optionsElementsArray = [];

        for (const movieOptionValue in moviesOrderByOptions) {
            const currentMovieOption = moviesOrderByOptions[movieOptionValue];

            if (currentMovieOption) {
                optionsElementsArray.push(
                    <option
                        key={`${movieOptionValue}_select_option`}
                        value={movieOptionValue}
                    >
                        {currentMovieOption}
                    </option>
                );
            }
        }

        return (
            <select onChange={handleChangeOrderFilter} >
                {optionsElementsArray}
            </select>
        );
    }

    return (
        <div>
            <div className='filters-container'>
                {buildMovieOrderSelectElement()}
            </div>

            {buildMoviesList()}
        </div>
    );
}
import { useEffect, useState } from 'react';
import './Home.css';

// Api
import Tmdb from '../../Api/Tmdb.js';

// Components
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import MoviesList from '../../components/MoviesList/MoviesList.jsx';
import MovieDetailsModal from '../../components/MovieDetailsModal/MovieDetailsModal';

export default function Home() {
  const [movies, setMoviesList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    Tmdb.getMovieList().then(movieList => {
      // Timeout to show loading animation
      setTimeout(() => {
        setMoviesList(movieList);
      }, 1000)
    });
  }, []);

  const handleClickOnMovieDetails = movie => {
    setSelectedMovie(movie);
  }

  const skeletonElements = (
    <div className='skeleton-elements-container'>
      <div className='skeleton-elements loading-pulse'></div>
      <div className='skeleton-elements loading-pulse'></div>
      <div className='skeleton-elements loading-pulse'></div>
      <div className='skeleton-elements loading-pulse'></div>
      <div className='skeleton-elements loading-pulse'></div>
    </div>
  )

  const buildMoviesList = gender => {
    const moviesFilteredByGender = movies.filter(({ slug }) => slug === gender);
    const moviesList = moviesFilteredByGender[0]?.items?.results || [];

    return (
      movies.length
        ?
        <MoviesList
          movies={moviesList}
          genderTitle={gender}
          movieCardOnClickFunction={handleClickOnMovieDetails}
        />
        :
        skeletonElements

    );
  }

  return (
    <>
      {/* Case has some movie details selected */}
      {
        selectedMovie
          ?
          <MovieDetailsModal
            backdropImg={selectedMovie.backdropPath ? `https://image.tmdb.org/t/p/w500/${selectedMovie.backdropPath}` : ''}
            description={selectedMovie.description || ''}
            name={selectedMovie.name || ''}
            voteAverage={selectedMovie.voteAverage || ''}
            releaseDate={selectedMovie.releaseDate || ''}
            setSelectedMovie={setSelectedMovie}
          />
          :
          null
      }

      <Header
        title='Filmes'
      />

      <div className='movies-list-container'>
        {buildMoviesList('action')}

        {buildMoviesList('toprated')}

        {buildMoviesList('comedy')}
      </div>

      <Footer
        title={'Desenvolvido por Vinicius Carvalho'}
      />
    </>
  );
}
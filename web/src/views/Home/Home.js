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
      setMoviesList(movieList);
    });
  }, []);

  const handleClickOnMovieDetails = movie => {
    setSelectedMovie(movie);
  }

  const buildMoviesList = gender => {
    const moviesFilteredByGender = movies.filter(({ slug }) => slug === gender);
    const moviesList = moviesFilteredByGender[0]?.items?.results || [];

    return (
      <MoviesList
        movies={moviesList}
        genderTitle={gender}
        movieCardOnClickFunction={handleClickOnMovieDetails}
      />
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

        {buildMoviesList('originals')}

        {buildMoviesList('toprated')}

        {buildMoviesList('comedy')}
      </div>

      <Footer
        title={'Desenvolvido por Vinicius Carvalho'}
      />
    </>
  );
}
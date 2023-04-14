import { useEffect, useState } from 'react';
import './Home.css';

//Components
import MoviesList from './components/MoviesList/MoviesList';

// Api
import Tmdb from './Api/Tmdb.js';

// Components
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'

export default function Home() {
  const [movies, setMoviesList] = useState([]);

  useEffect(() => {
    Tmdb.getMovieList().then(movieList => {
      setMoviesList(movieList)
    });

  }, []);

  const buildMoviesList = gender => {
    const moviesFilteredByGender = movies.filter(({ slug }) => slug == gender);
    const moviesList = moviesFilteredByGender[0]?.items?.results || [];

    return (
      <MoviesList
        movies={moviesList}
        genderTitle={gender}
      />
    );
  }

  return (
    <>
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
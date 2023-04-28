import { useEffect, useRef } from 'react';
import './MovieDetailsModal.css';

export default function MovieDetailsModal({
    backdropImg,
    name,
    description,
    voteAverage,
    releaseDate,
    setSelectedMovie,
}) {
    useEffect(() => {
        // Add event listener 'ESC' button press
        window.addEventListener('keyup', handleClickEscapeKey, false);

        // Add event listeners 'click' press
        window.addEventListener('mousedown', handleClickOutside, false);

        return () => {
            // Remove event listener 'ESC' button press
            window.removeEventListener('keyup', handleClickEscapeKey, false);

            // Remove event listeners 'click' press
            window.removeEventListener('mousedown', handleClickOutside, false);
        };
    }, []);

    const ref = useRef();

    const closeModal = () => {
        setSelectedMovie(null);
    }

    const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
            closeModal(null);
        }
    }

    const handleClickEscapeKey = event => {
        if (event.which == 27) {
            closeModal();
        }
    }

    const watchMovie = () => {
        const movieTrailerUrl = `https://www.youtube.com/results?search_query=${name}trailer}`;

        window.open(movieTrailerUrl);
    }

    const releaseDateFormatted = releaseDate.split('-').reverse().join('/');

    return (
        <div className="overlay">
            <div
                ref={ref}
                className='movie-modal-main-container'
            >
                <span
                    onClick={closeModal}
                    className="close"
                >
                    &times;
                </span>

                <div className='backdrop-img-container' >
                    <img
                        src={`${backdropImg}`}
                        className='backdrop-img'
                    />
                </div>

                <div className='divider'></div>

                <div className='title-and-vote-container'>
                    <span className='movie-name'>{name}</span>

                    <span className='movie-vote'>{voteAverage}</span>
                </div>

                <div className='release-date-and-popularity-container'>
                    <span className='release-date'>{releaseDateFormatted}</span>
                </div>

                <div className='description-container'>
                    <p>{description}</p>
                </div>

                <div className='watch-movie-button-container'>
                    <button
                        className='watch-movie-button'
                        onClick={watchMovie}
                    >
                        Assistir
                    </button>
                </div>
            </div>
        </div>
    );
}
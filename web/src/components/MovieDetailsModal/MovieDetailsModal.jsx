import './MovieDetailsModal.css';

export default function MovieDetailsModal({ backdropImg }) {
    console.log("🚀 ~ file: MovieDetailsModal.jsx:4 ~ MovieDetailsModal ~ backdropImg:", backdropImg);

    

    return (
        <div className="overlay">
            <div className='movie-modal-main-container'>
                <div
                    className='backdrop-img-container'
                >
                    <img
                        src={`${backdropImg}`}
                        className='backdrop-img'
                    // onClick={() => movieCardOnClickFunction(movieObj)}
                    />
                </div>
            </div>
        </div>
    );
}
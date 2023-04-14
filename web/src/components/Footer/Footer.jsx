import './Footer.css';

export default function Footer({ title }) {
    return (
        <footer className="footer">
            <span className='title'>
                {title}
            </span>
        </footer>
    )
}
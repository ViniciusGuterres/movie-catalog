import './Header.css';
import { Link } from 'react-router-dom';

export default function Header({ title }) {
    return (
        <header className="App-header">
            <h1 className='title'>
                {title}
            </h1>

            <div>
                <ul>
                    <li className='header-list'>
                        <Link
                            to={'/'}
                        >
                            <span className='header-list-span'>
                                Início
                            </span>
                        </Link>
                    </li>

                    <li className='header-list'>
                        <Link
                            to={'/register'}
                        >
                            <span className='header-list-span'>
                                Cadastro de assinante
                            </span>
                        </Link>
                    </li>

                    <li className='header-list'>
                        <Link
                            to={'/about'}
                        >
                            <span className='header-list-span'>
                                Sobre
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
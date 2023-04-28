// Components
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import '../Register/Register.css';

export default function Register() {
    return (
        <>
            <Header
                title='Filmes'
            />

            <div className='main-container'>
                <div className='main-container-forms'>
                    {/* First form */}
                    <div className='form'>
                        <h1 className='form-title '>Dados pessoais</h1>

                        <input
                            placeholder='Nome'
                            type='text'
                        />

                        <input
                            placeholder='Telefone'
                            type='number'
                        />

                        <input
                            placeholder='Endereço'
                            type='text'
                        />

                        <div>

                        </div>
                    </div>

                    {/* Second form */}
                    <div className='form'>
                        <h1 className='form-title '>Dados pessoais</h1>

                        <input
                            placeholder='Nome do cartão'
                            type='text'
                        />

                        <input
                            placeholder='Número do cartão'
                            type='number'
                        />

                        <input
                            placeholder='CVC'
                            type='number'
                        />

                        <div>

                        </div>
                    </div>
                </div>

                <div>
                    <button
                        className='test'
                        onClick={() => { }}
                    >
                        Assinar
                    </button>
                </div>
            </div>

            <Footer
                title={'Desenvolvido por Vinicius Carvalho'}
            />
        </>
    );
}
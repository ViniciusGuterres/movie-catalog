// Components
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import '../Register/Register.css';
import { useState } from 'react';

export default function Register() {
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [address, setAddress] = useState('');
    const [planType, setPlanType] = useState('');

    // credit card states
    const [creditCardCVCValue, setCreditCardCVCValue] = useState('');
    const [creditCardNumberValue, setCreditCardNumberValue] = useState('');
    const [creditCardNameValue, setCreditCardNameValue] = useState('');

    // On change functions
    const handleCreditCardCVCValueChange = event => {
        const CVCValue = event.target.value;

        setCreditCardCVCValue(CVCValue);
    }

    const handleCreditCardNumberValueChange = event => {
        const numberValue = event.target.value;

        setCreditCardNumberValue(numberValue);
    }

    const handleCreditCardNameValueChange = event => {
        const nameValue = event.target.value;

        setCreditCardNameValue(nameValue);
    }

    const handleSaveUser = () => {
        const userReturnObj = {
            name,
            tel,
            address,
            creditCardCVCValue,
            creditCardNumberValue,
            creditCardNameValue,
            planType
        };

        if (
            !name ||
            !tel ||
            !address ||
            !creditCardCVCValue ||
            !creditCardNameValue ||
            !creditCardNumberValue ||
            !planType
        ) {
            alert('Por favor, preencha todos os campos');
        } else {
            console.log('User: ', userReturnObj);

            cleanForms();
            alert('Usuário cadastrado com sucesso');
        }
    }

    const cleanForms = () => {
        setName('');
        setTel('');
        setAddress('');
        setCreditCardCVCValue('');
        setCreditCardNameValue('');
        setCreditCardNumberValue('');
    }

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
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />

                        <input
                            placeholder='Telefone'
                            type='number'
                            value={tel}
                            onChange={event => setTel(event.target.value)}
                        />

                        <input
                            placeholder='Endereço'
                            type='text'
                            value={address}
                            onChange={event => setAddress(event.target.value)}
                        />

                        <div className='button-plan-type-container'>
                            <button
                                className={planType == 'free' ? 'button-plan-type-active' : 'button-plan-type'}
                                onClick={() => setPlanType('free')}
                            >
                                Free
                            </button>

                            <button
                                className={planType == 'plus' ? 'button-plan-type-active' : 'button-plan-type'}
                                onClick={() => setPlanType('plus')}
                            >
                                Plus
                            </button>
                        </div>
                    </div>

                    {/* Second form */}
                    <form className='form'>
                        <h1 className='form-title '>Dados pessoais</h1>

                        <input
                            placeholder='Nome do cartão'
                            type='text'
                            onChange={handleCreditCardNameValueChange}
                            value={creditCardNameValue}
                        />

                        <input
                            placeholder='Número do cartão'
                            type='number'
                            max="20"
                            maxLength="20"
                            value={creditCardNumberValue}
                            onChange={handleCreditCardNumberValueChange}
                        />

                        <input
                            placeholder='CVC'
                            type='password'
                            max="3"
                            maxLength="3"
                            value={creditCardCVCValue}
                            onChange={handleCreditCardCVCValueChange}
                        />
                    </form>
                </div>

                <div>
                    <button
                        className='test'
                        onClick={handleSaveUser}
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
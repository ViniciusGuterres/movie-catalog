// Components
import Vinicius from '../Vinicius.jsx';
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'

export default function Home() {
  return (
    <>
      <Header
        title='Filmes'
      />

      <Vinicius
        title={'Lista de carros'}
      />

      <Footer
        title={'Desenvolvido por Vinicius Carvalho'}
      />
    </>
  );
}
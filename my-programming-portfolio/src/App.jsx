import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Project from './components/Project'
import m_de_maravilhosa from './img/m_de_maravilhosa.jpg'
import meus_drinks from './img/meus_drinks.jpg'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Header title="My Programming Portfolio" subtitle="Por Nicolle Dias"/>
      <Main text="Dois grandes projetos!">
        <Project title="M de Maravilhosa" img={m_de_maravilhosa}/>
        <Project title="Meus Drinks" img={meus_drinks}/>
      </Main>
      <Footer />
    </div>
  )
}

export default App

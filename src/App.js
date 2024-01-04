//Import style
import './App.css';

//Import component
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Portfolio from './components/projects/Portfolio';

//Component App
const App = () => {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home />
        <About />
        <Portfolio />
        <Skills />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;

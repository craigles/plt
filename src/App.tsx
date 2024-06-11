import './App.scss';
import { About, Contact, Footer, Gigs, Music, Videos } from './sections';
import { MusicPlayer } from './components';
import { Header } from './sections/Header';

function App() {
  return (
    <>
      <main>
        <Header />
        <Music />
        <Videos />
        <Gigs />
        <About />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    <MusicPlayer />
    </>
  );
}

export default App;

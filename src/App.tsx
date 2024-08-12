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
        <hr />
        <Videos />
        <hr />
        <Gigs />
        <hr />
        <About />
        <hr />
        <Contact />
      </main>
      <hr />
      <footer>
        <Footer />
      </footer>
      <MusicPlayer />
    </>
  );
}

export default App;

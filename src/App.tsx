import './App.scss';
import { Header, About, Contact, Footer, Gigs, Music, Videos } from './sections';
import { MusicPlayer } from './components';
import { useEffect } from 'react';

function App() {

  useEffect(() => {

  }, []);
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

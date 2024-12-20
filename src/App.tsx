import './App.scss';
import "react-image-gallery/styles/scss/image-gallery.scss";
import { Header, About, Contact, Footer, Gigs, Music, Videos, Photos } from './sections';
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
        <Photos />
        <hr />
        <About />
        <hr />
        <Contact />
      </main>
      <hr />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

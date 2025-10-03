import './App.scss';
import "react-image-gallery/styles/scss/image-gallery.scss";
import { Header, Footer } from './sections';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages';

function App() {
  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='*' element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <hr />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

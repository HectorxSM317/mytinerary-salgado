import './styles/App.css';
import Navbar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Footer from './components/Footer/Footer';
import PageCities from './pages/PageCities';
import PageNotFound from './pages/PageNotFound';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Index /> } />
          <Route path='/cities' element={<PageCities /> } />
          <Route path='/*' element={<PageNotFound /> } />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;

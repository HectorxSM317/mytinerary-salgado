import './styles/App.css';
import Navbar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Footer from './components/Footer';
import PageCities from './pages/PageCities';
import PageNotFound from './pages/PageNotFound';
import Detail from './pages/Detail';
import ScrollToTop from "react-scroll-to-top";
import { useEffect } from 'react';


function App() {

  useEffect(() =>{
    setTimeout(() =>{
      window.scrollTo(0, 0)
    }, 500)

  }, [])



  return (
    <div className="App">
      <Navbar />
      <ScrollToTop smooth />
      <Routes>
          <Route path="/" element={<Index /> } />
          <Route path='/cities' element={<PageCities /> } />
          <Route path='/*' element={<PageNotFound /> } />
          <Route path='/detail/:id' element={<Detail />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;

import './styles/App.css';
import Navbar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Footer from './components/Footer';
import PageCities from './pages/PageCities';
import PageNotFound from './pages/PageNotFound';
import Detail from './pages/Detail';
import ScrollToTop from "react-scroll-to-top";
import { MdCallMerge as MySVG } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { connect } from "react-redux";
import citiesActions from './redux/actions/citiesActions'
import { useEffect } from "react";




function App(props) {
  AOS.init();

  useEffect(() => {
    props.getCities()
  }, [])
  
  
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop smooth className='toTop animate-bounce' top={500} component={<MySVG width={20} />}/>
      <Routes>
          <Route path="/" element={<Index /> } />
          <Route path="/index" element={<Index /> } />
          <Route path='/cities' element={<PageCities /> } />
          <Route path='/*' element={<PageNotFound /> } />
          <Route path='/detail/:id' element={<Detail />} />
      </Routes>
      <Footer />
    </div>
    
  );
}


const mapDispatchToProps = {
  getCities: citiesActions.getCities
}

export default connect(null, mapDispatchToProps)(App);

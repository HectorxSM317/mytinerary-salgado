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
import 'aos/dist/aos.css';
import citiesActions from './redux/actions/citiesActions'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PageSignUp from './pages/PageSignUp';
import PageSignIn from './pages/PageSignIn';
import { Toaster } from 'react-hot-toast';
import usersAction from "../src/redux/actions/usersAction"





export default function App() {
  const dispatch = useDispatch()
  AOS.init();

  useEffect(() => {
    if(localStorage.getItem('token') !== null){
      const token = localStorage.getItem('token')
      console.log(token)
      dispatch(usersAction.checkToken(token))
    }
  },)

  useEffect(() => {
    // props.getCities()
    dispatch(citiesActions.getCities())

  }, [])

  
  
  
  return (
    <div className="App">
      <Navbar />
      <Toaster 
      position="top-center"
      reverseOrder={true} />
      <ScrollToTop smooth className='toTop animate-bounce' top={500} component={<MySVG width={20} />}/>
      <Routes>
          <Route path="/" element={<Index /> } />
          <Route path="/index" element={<Index /> } />
          <Route path='/cities' element={<PageCities /> } />
          <Route path='/*' element={<PageNotFound /> } />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/signin' element={<PageSignIn />} />
          <Route path='/signup' element={<PageSignUp />} />
      </Routes>
      <Footer />
    </div>
    
  );
}


// const mapDispatchToProps = {
//   getCities: citiesActions.getCities
// }

// export default connect(null, mapDispatchToProps)(App);

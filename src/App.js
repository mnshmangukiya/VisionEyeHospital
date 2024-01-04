import './App.css'
import './assets/css/responsive.css'
import Header from './assets/js/Header';
import Home from './assets/js/Home';
import Footer from './assets/js/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutus from './assets/js/Aboutus';
import Services from './assets/js/Services';
import Blogs from './assets/js/Blogs';
import Singleblog from './assets/js/Singleblog';
import Contactus from './assets/js/Contactus';
import Appoinment from './assets/js/Appoinment';
import Oculoplasty from './assets/js/Oculoplasty';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<Aboutus/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/services/oculoplasty" element={<Oculoplasty/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/singleblog" element={<Singleblog/>} />
          <Route path="/contact" element={<Contactus/>} />
          <Route path="/appoinment" element={<Appoinment/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

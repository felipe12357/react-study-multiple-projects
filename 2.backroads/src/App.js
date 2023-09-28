
import { Fragment } from 'react';
import Header from './components/header/Header';
import {MainBanner} from './components/main-banner/MainBanner';
import About from './components/about-us/AboutUs';
import Services from './components/services/Services';
import Tours from './components/tours/Tours';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Fragment>
      <Header/>
      <MainBanner/>
      <About/>
      <Services/>
      <Tours/>
      <Footer/>
    </Fragment>
    
  );
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarNew from './Components/NavbarNew';
import Header from './Components/Header';
import About from './Components/About';
import Skils from './Components/Skils';
import ContactUs from './Components/ContactUS';
// import Footer from './Components/Footer';

const App = () => {
  return (
    <div style={{
      color: "whitesmoke",
      background: "#0F2027"
    }}>
      <NavbarNew />
      <Header />
      <About />
      <Skils />
      <ContactUs />
      {/* <Footer /> */}

    </div>
  );
}

export default App;
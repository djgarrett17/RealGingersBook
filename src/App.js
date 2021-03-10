import React, {Image} from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Container from './styles/container.css';

// // Components
import Navbar from './components/Navbar/Navbar.js';
// import Modal from './components/Navbar/Modal.js';
import Footer from './components/Footer/Footer.js'
// // Pages
import Home from './pages/Home.js';
import About from './pages/About.js'
// import Contact from './pages/Contact.js'

// import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = ({ location }) => {

  return (
    // <Router>
      
      
      <div style={Container}>
        {/* <Modal/> */}
        <Navbar />
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          {/* <Route exact path="/Contact" component={Contact} /> */}
     
          
        </Switch>
        <Footer/>
      </div>
      
    // </Router>
  )
}

export default withRouter(App);

import React, { Component } from "react";
import { Link } from 'react-router-dom'

import './assets/css/style.css';
// import Home from '../../pages/Home.js'
// import './assets/css/mediaquerynav.css';
import { AiFillAmazonCircle, AiFillFacebook } from "react-icons/ai";
// import { AiFillFacebook } from "react-icons/ai";

// import $ from 'jquery';

class Navbar extends Component {
  componentDidMount() {

    // function newDoc() {
    //     window.location.href = 'https://www.amazon.com/dp/0692175563/ref=cm_sw_em_r_mt_dp_U_o7T2Db7Y6GQPX';
    // }


}
    
render (){
    return(

        <div className="footer">
            <div className="mainFooter">
                <div className="footerLogoBigDiv">
                    <Link to="/" className="footerLogoDivLink"><div className="footerLogoDiv">
                    <img id="footImage1" src="./assets/images/covid-title-red-white-no-bkgd.png" alt="Front Cover"></img>
                    </div></Link>
                </div>
                
                
                <div className="footerSocial">
                <div className="footerEachSocialDiv">
                    <a href="https://www.facebook.com/ginger.walker.3720" className="visitFacebook">
                    
                        <span className="footerAmazonTxt">Visit us</span>
                        <AiFillFacebook size={30}></AiFillFacebook>
                    
                    </a>
                    </div>
                    <div className="footerEachSocialDiv">
                    <a href="https://www.amazon.com/Covid-19-Real-Time-Ginger-Walker/dp/1087909570/ref=mp_s_a_1_2?dchild=1&keywords=covid-19+ginger+ann+walker&qid=1613683909&sr=8-2" className="shopAmazon">
                    
                        <span className="footerAmazonTxt">Shop now</span>
                        <AiFillAmazonCircle size={30}></AiFillAmazonCircle>
                    {/* <img id="socialLogo" src="./assets/images/icons/amazon.png" alt="amazon"/> */}
                    
                    </a>
                    </div>
                </div>
                
            </div>
            <div className="copyrightDiv">
                <span>Copyright. All Rights Reserved 2021.</span>  
            </div>
        </div>
    )
}
}


export default Navbar; 
import React, { Component } from "react";
import { Link } from 'react-router-dom'

import './assets/css/style.css';
// import Home from '../../pages/Home.js'
// import './assets/css/mediaquerynav.css';

import $ from 'jquery';

function Navbar({location}) {

    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 2) {
        $("#navbar").css({"height": "100px"});
      } else {
          $("#navbar").css({"height": "125px"});
      }
    });

    // var modal = document.getElementById("myModal");
        // var modal = document.getElementsByClassName("modal");
        // Get the button that opens the modal
        // var btn = document.getElementById("menu");
        // Get the <span> element that closes the modal
        // var span = document.getElementsByClassName("close")[0];

        // var homeClose = document.getElementById("closeOne");
        // var aboutClose = document.getElementById("closeTwo");


        function ClickButton() {
          console.log("opened");
          // alert('button worked');
          // modal.style.height = "100%";
          $(".modal").css({"height": "100%"});
      }

      // if (y > 2) {
      //   $("#navbar").css({"height": "100px"});
      // } else {
      //     $("#navbar").css({"height": "125px"});
      // }
      

      // When the user clicks on <span> (x), close the modal
      function SpanClickButton() {
      console.log("close");
      $(".modal").css({"height": "0%"});
      }

      function HomeClickButton() {
          console.log("closey");
          $(".modal").css({"height": "0%"});
      }
      function AboutClickButton() {
          console.log("closeer");
          $(".modal").css({"height": "0%"});
      }

  
    
      $(document).ready(function() {
      if (window.location.pathname === '/') {
        $('#navbar').css('background', 'transparent');
      }  
      else if (window.location.pathname === '/About') {
        $('#navbar').css('background', 'rgb(40, 40, 42)');
      } 
    })
  
    return(
      <div>
        <div id="navbar">
              
              <Link to="/" className="navLogoDivLink"><div className="navLogoDiv">
                {/* <span className="navLogoBigTxt">COVID-19</span>
                <span className="navLogoSmallTxt">In Real Time</span> */}
                <img id="navImage1" src="./assets/images/covid-title-red-white-no-bkgd.png" alt="Front Cover"></img>
                </div></Link>
              
              

              <div className="homeMenu">
                  <span > <Link to="/" className="homeNav" id="homeId" > Home</Link> </span>
                  <span > <Link to="/About" className="homeNav" id="aboutId"> About</Link> </span>
                  <a className="homeNav" href = "mailto: gingerwalker96@gmail.com"> Contact </a>
                  
              </div>
              

              <img id="menu" onClick={ClickButton} src="./assets/images/icons/burgermenuwhite.png" alt="down" width="30px" height="30px"/>
              
              
                
                </div>
                <div id="myModal" className="modal"> 
                  <div className="modalContent">
                  <span className="close" onClick={SpanClickButton}>&times;</span>

                  <div className="mobileMenu">

                  <span > <Link to="/" id="closeOne" className="mobileNav" onClick={HomeClickButton} > Home</Link> </span>
                  <span > <Link to="/About" id="closeTwo" className="mobileNav" onClick={AboutClickButton} > About</Link> </span>        
                  <a className="homeNav closetoo" href="mailto: gingerwalker96@gmail.com"><span className="mobileNav">Contact</span></a>
                      {/* <div className="socialDiv lilmargin">
                          <a target="_blank" href="https://www.instagram.com/the.adjective.media/"> <img className="socialIcon closetoo" src="./assets/images/icons/instaadj.png"></img></a>
                          <a target="_blank" href="https://www.facebook.com/adjective.media/"> <img className="socialIcon closetoo" src="./assets/images/icons/fbadj.png"></img></a>
                          <a target="_blank" href="https://www.linkedin.com/company/adjective-media/"><img className="socialIcon closetoo" src="./assets/images/icons/linkedadj.png"></img></a>
                      </div> */}
                    </div>
                      </div>
                      </div>



</div>



      
    )
}


export default Navbar; 
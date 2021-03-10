import React, { Component } from "react";
import { Link } from 'react-router-dom'

// import { FiChevronsRight } from "react-icons/fi"
import { BsArrowRight, BsFillCaretRightFill } from "react-icons/bs";

import './styles/Home.css';
// import './assets/css/mediaquerynav.css';
import $ from 'jquery';

// Parallax
import { Parallax } from 'react-parallax';
import image1 from './styles/images/herobg-resized.jpg';
import image2 from './styles/images/cover-tiled-caduceus-fabric1.jpg';


// Animate
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {
    
    function newDoc() {
        window.location.href = 'https://www.amazon.com/dp/0692175563/ref=cm_sw_em_r_mt_dp_U_o7T2Db7Y6GQPX';
    }

            return(
               
        <div className="homeWrap">
            <Parallax bgImage = { image1 } strength = {300}>
            <div className="homeTopWhole">

                <div className="homeTitleDiv">
                    {/* <span className="homeTitleBigTxt">COVID-19</span>
                    <span className="homeTitleSmallTxt">In Real Time</span> */}
                    <img id="titleImage1" src="./assets/images/covid-title-red-white-no-bkgd.png" alt="Front Cover"></img>
                    <span className="middleTxtEyeWitness">AN EYE WITNESS ACCOUNT FROM A PATIENT</span>
                    {/* <img id="kpBox" src="./assets/images/ProductFront.png" alt="Front Cover"></img> */}
                    <div className="addToCartBtn">
                            <a href="https://www.amazon.com/Covid-19-Real-Time-Ginger-Walker/dp/1087909570/ref=mp_s_a_1_2?dchild=1&keywords=covid-19+ginger+ann+walker&qid=1613683909&sr=8-2" className="shopBtn">Available now on Amazon <BsArrowRight className="arrowTop"/></a>
                    </div>
                </div>
             
                
            </div>
            </Parallax>
            <Parallax bgImage = { image2 } strength = {200}>
            <div className="homeMiddleWhole">
                <div className="homeMiddleLeft">
                    <div className="homeMiddleInnerLeft">
                        <span className="homeMiddleLeftTitle">Note from the Author
                        <div className="hrDiv">
                            <hr className="midHr"></hr>
                            <hr ></hr>
                            </div>
                        </span>
                        <span className="homeMiddleLeftText">Now that I have recovered, I feel obligated to fill in the blanks. I offer my efforts to research scientist, doctors, nurses, patients, students, family members, and the general public, first-person information and support from my daily experiences. I dedicate this to those infected, may become infected, attempting to avoid infection, or are serving those infected.</span>
                        <span className="homeMiddleLeftSigned">Ginger Ann Walker</span>
                        {/* <div className="addToCartBtn">
                            <a href="https://www.amazon.com/dp/0692175563/ref=cm_sw_em_r_mt_dp_U_o7T2Db7Y6GQPX" className="shopBtn">Available now on Amazon</a>
                    </div> */}
                    </div>
                </div>
                
                <div className="homeMiddleRight">
                    {/* <span className="middleTxtEyeWitness">This is some image</span> */}
                    {/* <img id="kpBox" src="./assets/images/ProductFront.png" alt="Front Cover"></img> */}
                </div>
              
                
            </div>
            </Parallax>
            <div className="homeBottomWhole">
                <span className="homeBottomTitle">Meet the team
                    <div className="hrDiv">
                    <hr className="midHr"></hr>
                    <hr ></hr>
                    </div>
                </span>
               
                
                <div className="homeBottomGingerAndEdDiv">
                    <div className="homeBottomTeam">
                   
                        <img id="authorImage1" src="./assets/images/GingerCut.png" alt="Front Cover"></img>
                       
                        <span className="homeBottomText">Ginger Ann Walker</span>
                        <span className="homeBottomSubText">Author</span>
                        <Link to="/About" className="homeBottomButton">Learn More <BsFillCaretRightFill className="arrow"/></Link>
                    </div>
                    
                    <div className="homeBottomTeam">
                        <img id="authorImage2" src="./assets/images/JohnEdCut.png" alt="Front Cover"></img>
                        <span className="homeBottomText">Garrett Williams</span>
                        <span className="homeBottomSubText">Editor</span>
                        <Link to="/About" className="homeBottomButton">Learn More <BsFillCaretRightFill className="arrow"/></Link>
                    </div>
                </div>
        
                <div className="homeBottomTeam">
                    <img id="authorImage3" src="./assets/images/Nancy.png" alt="Front Cover"></img>
                    <span className="homeBottomText">Nancy Adams Arnold</span>
                    <span className="homeBottomSubText">Graphic Design and Production</span>
                    <Link to="/About" className="homeBottomButton">Learn More <BsFillCaretRightFill className="arrow"/></Link>
                </div>
            </div>



        </div>  
        
    )
            }



export default Home;
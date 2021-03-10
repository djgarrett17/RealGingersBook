import React, { Component } from "react";
import { Link } from 'react-router-dom'


import './styles/About.css';
// import './assets/css/mediaquerynav.css';
// import $ from 'jquery';



class About extends Component {
    

        
    
render (){
  
            return(
               
        <div className="aboutWrap">
            <div className="aboutTitleDiv"> 
                <span className="aboutTitle">About</span> 
                <div className="hrDiv">
                    <hr className="aboutHr"></hr>
                    <hr></hr>
                </div>
            </div>
            <div className="aboutGinger">
                <div className="imageGingerDiv">
                    <img id="imageGinger" src="./assets/images/GingerCut.png" alt="Ginger"></img>
                </div>
                <div className="aboutGingerTxtWhole">
                    <span className="aboutTxtTitle">Ginger Ann Walker</span>
                    <span className="aboutGingerTxtSubTitle">Author</span>
                    <hr className="teamHr"></hr>
                    <span className="aboutTxtBody">I was born at Baptist Hospital in Nashville, Tennessee, on October 14, 1996. Coincidentally, I am employed just a short elevator ride to the floor and ward where I was born. I attended Rutland Elementary School in Wilson County, Tennessee, where my mother was a teacher, as another coincidence. The middle school years were at West Wilson Middle, and subsequently, I graduated from Wilson Central High School in 2015. I was reared in a Christian home and professed my Faith accordingly at my age of accountability. My first regular job was at Courtney’s Restaurant in Mt. Juliet, Tennessee, the homes of the famed Charlie Daniels and master fisherman, Coach Rees Groce, who taught me how to catch crappie. I am grateful to Tom Courtney for hiring a fledgling teenager and reinforcing the strong work ethic ingrained by my father, Mike Walker. This early grounding helped make me want to choose a career with a mission and purpose of helping people, but I did not know it would be in nursing. As I began to take science classes in highschool, I became increasingly interested in anatomy and physiology and how the human body functions. Later, that led me to become certified as a nurse assistant-CNA, which enabled me to work in a nursing home. As time elapsed, I became convinced that becoming a Registered Nurse was my choice and perhaps calling. I enrolled in South College and began my journey. The rest of the story you already have read or will follow.</span>
                </div>
            </div>
            <div className="aboutJohnEd">
                <div className="aboutJohnEdTxtWhole">
                    <span className="aboutTxtTitle">Garrett Williams - John "Ed" Garrett</span>
                    <span className="aboutJohnEdTxtSubTitle">Editor</span>
                    <hr className="teamHr"></hr>
                    <span className="aboutTxtBody">Ed was born and nurtured in Springfield, Tennessee, and has lived most of his adult years in the Madison Community of Metropolitan Nashville and Davidson County, Tennessee. He was a four-decade career educator with the Metro Public School District as a classroom teacher, supervisor and H.R. Director for the Secondary Schools. Ed’s talents beyond the classroom have awarded him U.S. patents and copyrights for intellectual property creations including a public television media production, two personal books, and ghost writings resulting in four additional published books and several magazine articles. Ed’s pseudonym as a writer is Garrett Williams in honor of his father and mother.</span>
                </div>
                <div className="imageJohnEdDiv">
                    <img id="imageJohnEd" src="./assets/images/JohnEd.png" alt="JohnEd"></img>
                </div>
                
            </div>
            <div className="aboutNancy">
                <div className="imageNancyDiv">
                    <img id="imageNancy" src="./assets/images/Nancy.png" alt="Nancy"></img>
                </div>
                <div className="aboutNancyTxtWhole">
                    <span className="aboutTxtTitle">Nancy Adams Arnold</span>
                    <span className="aboutNancyTxtSubTitle">Graphic Design and Production</span>
                    <hr className="teamHr"></hr>
                    <span className="aboutTxtBody">Nancy’s artistic gifts and creative talents became apparent to all observers during her pre-teen years in Cedar Hill, Tennessee. At age 12, formal lessons began, followed by teacher recommended summer employment preparing art for silk-screening stadium cushions. Next, were stints with the Newspaper Printing Corporation, Design Graphics, Inc., and the Baptist Sunday School Board facilitating ad and mechanical layouts, as well as preparing camera-ready art. She worked at BSSB, now LifeWay Christian Resources for 17 years fulltime and freelance for a total of 40 years. Nancy lives in Springfield, Tennessee, with husband Eddie and Lucky, everyone’s favorite Chihuahua.</span>
                </div>
            </div>


        </div>  
        
    )
            }}



export default About;
import React, { Component } from 'react';
import webdesign from '../images/logos/webdesign.png';
import appdesign from '../images/logos/appdesign.png';
import graphics from '../images/logos/graphicdesign.png';
import mongo from '../images/logos/mongodb_logo.png';
import express from '../images/logos/express_logo.png';
import react from '../images/logos/ReactJS_logo.png';
import node from '../images/logos/Nodejs_logo.png';
import sass from '../images/logos/sass_logo.png';
import jquery from'../images/logos/jQuery_logo.png';
import materialize from '../images/logos/materialize_logo.png';
import cordova from '../images/logos/cordova_logo.png';
import parallax1 from '../images/image3.png';
import logo from '../images/logos/logo.jpg';

export default class Wrapper2 extends Component {
    render(){
        let testimonialStyle = {
            backgroundImage: 'url(' + logo + ')'
        }

        return (
            <div className="wrapper2" id="wrapper2">
                <div className="wrapper">
                    <div className="things-do row">
                        <h1 className="center slideanim white-text">WHAT I DO</h1>
                        <div className="underline slideanim"></div>
                        <div className="col m4 s12 slideanim">
                            <img src={webdesign} alt=""/>
                            <h5>WEB DESIGN</h5>
                            <div className="underline"></div>
                            <p className="light">I build secure websites with beautiful interfaces, good user experience, and functional backend</p>
                        </div>
                        <div className="col m4 s12 slideanim">
                            <img src={appdesign} alt=""/>
                            <h5>APP DESIGN</h5>
                            <div className="underline"></div>
                            <p className="light">I build secure and scalable mobile applications across all platforms.</p>
                        </div>
                        <div className="col m4 s12 slideanim">
                            <img src={graphics} alt=""/>
                            <h5>GRAPHICS DESIGN</h5>
                            <div className="underline"></div>
                            <p className="light">I create awesome designs for logos, banners and flyers for advertising events, organizations amongst others.</p>
                        </div>
                    </div>
                    {/* <div className="tools">
                        <div className="row">
                            <div className="col s3 valign-wrapper center slideanim2">
                                <img src={mongo} alt="" className="responsive-img valign"/>
                            </div>
                            <div className="col s3 valign-wrapper center slideanim2">
                                <img src={express} alt="" className="responsive-img valign"/>
                            </div>
                            <div className="col s3 valign-wrapper center slideanim2">
                                <img src={react} alt="" className="responsive-img valign"/>
                            </div>
                            <div className="col s3 valign-wrapper center slideanim2">
                                <img src={node} alt="" className="responsive-img valign"/>
                            </div>
                            <div className="col s3 valign-wrapper center slideanim">
                                <img src={sass} className="responsive-img valign" alt=""/>
                            </div>
                            <div className="col s3 valign-wrapper center slideanim">
                                <img src={jquery} className="responsive-img valign" alt=""/>
                            </div>
                            <div className="col s3 valign-wrapper center slideanim">
                                <img src={materialize} alt="" className="responsive-img valign"/>
                            </div>
                            <div className="col s3 valign-wrapper center slideanim">
                                <img src={cordova} className="responsive-img valign" alt=""/>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="skills parallax-container row" id="skills">
                    <div className="col l6 valign-wrapper">
                        <div className="skills-content valign light">
                            <h5 className="light">HERE ARE A FEW OF MY SKILLS:</h5>
                            <div className="progress transparent">
                                <div className="determinate teal html"></div>
                            </div>
                            <i className="mdi mdi-language-html5"></i>&nbsp;&nbsp;HTML5
                            <div className="right"><span className="timer">90</span>%</div>
                            <div className="progress transparent">
                                <div className="determinate teal css"></div>
                            </div>
                            <i className="mdi mdi-language-css3"></i>&nbsp;&nbsp;CSS3 | SASS
                            <div className="right"><span className="timer">85</span>%</div>
                            <div className="progress transparent">
                                <div className="determinate teal js"></div>
                            </div>
                            <i className="mdi mdi-language-javascript"></i>&nbsp;&nbsp;JAVASCRIPT
                            <div className="right"><span className="timer">70</span>%</div>
                            <div className="progress transparent">
                                <div className="determinate teal php"></div>
                            </div>
                            <i className="mdi mdi-language-php"></i>&nbsp;&nbsp;PHP | MYSQL
                            <div className="right"><span className="timer">65</span>%</div>
                            <div className="progress transparent">
                                <div className="determinate teal python"></div>
                            </div>
                            <i className="mdi mdi-language-python"></i>&nbsp;&nbsp;PYTHON
                            <div className="right"><span className="timer">35</span>%</div>
                        </div>
                    </div>
                    <div className="col l6 hide-on-med-and-down">
                    </div>
                    <div className="parallax"><img src={parallax1} alt=""/></div>
                </div>
                <div className="testimonials">
                    <h4 className="light center">HERE'S WHAT PEOPLE ARE SAYING ABOUT ME:</h4>
                    <div className="underline2 slideanim"></div>
                    <div className="slider">
                        <ul className="slides">
                            <li style={testimonialStyle}>
                                <div className="valign-wrapper">
                                    <div className="valign caption left-align">
                                        <p className="light white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quia possimus blanditiis, odio facilis obcaecati, in molestiae! Ab, consequatur, doloribus.</p>
                                        <br/>
                                        <p className="referrer">Lorem ipsum.</p>
                                        <p className="ref-title light">CEO, Lorem ipsum dolor.</p>
                                    </div>
                                </div>
                            </li>
                            <li style={testimonialStyle}>
                                <div className="valign-wrapper">
                                    <div className="valign caption left-align">
                                        <h5 className="light white-text"></h5>
                                    </div>
                                </div>
                            </li>
                            <li style={testimonialStyle}>
                                <div className="valign-wrapper">
                                    <div className="valign caption left-align">
                                        <h5 className="light white-text"></h5>
                                    </div>
                                </div>
                            </li>
                            <li style={testimonialStyle}>
                                <div className="valign-wrapper">
                                    <div className="valign caption left-align">
                                        <h5 className="light white-text"></h5>
                                    </div>
                                </div>
                            </li>
                            <li style={testimonialStyle}>
                                <div className="valign-wrapper">
                                    <div className="valign caption left-align">
                                        <h5 className="light white-text"></h5>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
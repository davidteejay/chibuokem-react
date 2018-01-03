import React, { Component } from 'react';
import webdesign from '../images/logos/webdesign.png';
import appdesign from '../images/logos/appdesign.png';
import graphics from '../images/logos/graphicdesign.png';
import logo from '../images/logos/logo.jpg';

export default class Wrapper2 extends Component {
    render(){
        let testimonialStyle = {
            backgroundImage: 'url(' + logo + ')'
        }

        return (
            <div className="wrapper2" id="wrapper2">
                <div className="wrapper">
                    <div className="things-do row" id="things-do">
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
                </div>
                <div className="skills row center" id="skills">
                    <h2>HERE ARE A FEW OF MY SKILLS</h2>
                    <div className="underline slideanim"></div>
                    <div className="col s6 m4 center">
                        <div className="icon html">
                            <i className="devicon-html5-plain colored"></i>
                            <p className="light">HTML5</p>
                        </div>
                    </div>
                    <div className="col s6 m4 center">
                        <div className="icon sass">
                            <i className="devicon-sass-plain colored"></i>
                            <p className="light">SASS, CSS3</p>
                        </div>
                    </div>
                    <div className="col s6 m4 center">
                        <div className="icon js">
                            <i className="devicon-javascript-plain colored"></i>
                            <p className="light">ReactJS</p>
                        </div>
                    </div>
                    <div className="col s6 m4 center">
                        <div className="icon php">
                            <i className="devicon-php-plain colored"></i>
                            <p className="light">PHP, MySQL</p>
                        </div>
                    </div>
                    <div className="col s6 m4 center">
                        <div className="icon mongo">
                            <i className="devicon-mongodb-plain colored"></i>
                            <p className="light">MongoDB</p>
                        </div>
                    </div>
                    <div className="col s6 m4 center">
                        <div className="icon photoshop">
                            <i className="devicon-photoshop-plain colored"></i>
                            <p className="light">Adobe Photoshop</p>
                        </div>
                    </div>                   
                </div>
                <div className="testimonials" id="testimonials">
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
                                        <p className="light white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quia possimus blanditiis, odio facilis obcaecati, in molestiae! Ab, consequatur, doloribus.</p>
                                        <br/>
                                        <p className="referrer">Lorem ipsum.</p>
                                        <p className="ref-title light">CEO, Lorem ipsum dolor.</p>
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
import React, { Component } from 'react';
import webdesign from '../images/logos/webdesign.png';
import appdesign from '../images/logos/appdesign.png';
import graphics from '../images/logos/graphicdesign.png';
import Menu from './menu';

export default class Wrapper2 extends Component {
    render(){
        return (
            <div className="wrapper2 page" id="wrapper2">
                <Menu/>
                <div className="wrapper">
                    <div className="things-do row valign-wrapper" id="things-do">
                        <div className="valign">
                            <h1 className="center slideanim">WHAT I DO</h1>
                            <div className="underline slideanim"></div>
                            <div className="row">
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
                            <div className="skillset">
                                <div className="skill">
                                    <i className="devicon-nodejs-plain-wordmark"></i>
                                </div>
                                <div className="skill">
                                    <i className="devicon-react-original"></i>
                                </div>
                                <div className="skill">
                                    <i className="devicon-express-original-wordmark"></i>
                                </div>
                                <div className="skill">
                                    <i className="devicon-mongodb-plain"></i>
                                </div>
                                <div className="skill">
                                    <i className="devicon-android-plain"></i>
                                </div>
                                <div className="skill">
                                    <i className="devicon-javascript-plain"></i>
                                </div>
                                <div className="skill">
                                    <i className="devicon-sass-original"></i>
                                </div>
                                <div className="skill">
                                    <i className="devicon-html5-plain"></i>
                                </div>
                                <div className="skill">
                                    <i className="devicon-php-plain"></i>
                                </div>
                                <div className="skill">
                                    <i className="devicon-mysql-plain"></i>
                                </div>
                                <div className="skill">
                                    <i className="devicon-photoshop-line"></i>
                                </div>
                                <div className="skill">
                                    <i className="devicon-wordpress-plain"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

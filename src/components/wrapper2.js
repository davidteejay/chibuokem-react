import React, { Component } from 'react';
import webdesign from '../images/logos/webdesign.png';
import appdesign from '../images/logos/appdesign.png';
import graphics from '../images/logos/graphicdesign.png';

export default class Wrapper2 extends Component {
    render(){
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
            </div>
        )
    }
}
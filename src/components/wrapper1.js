import React, { Component } from 'react';
import logo from '../images/logos/logo.jpg';

export default class Wrapper1 extends Component {
    render(){
        return (
            <div className="wrapper1" id="wrapper1">
                <div className="row">
                    <div className="col l6 valign-wrapper center">
                        <div className="content valign center">
                            <div className="img">
                                <img src={logo} alt="" />
                            </div>
                            <h1 className="light">Chibuokem Onyekwelu</h1>
                            <div className="social">
                                <a href="https://github.com/davidteejay" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="GitHub" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-github-circle"></i></a>
                                <a href="https://linkedin.com/in/chibuokem-onyekwelu" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="LinkedIn" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-linkedin"></i></a>
                                <a href="https://facebook.com/chibuokem.onyekwelu" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Facebook" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-facebook"></i></a>
                                <a href="https://instagram.com/i_am_tushh" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Instagram" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-instagram"></i></a>
                                <a href="https://twitter.com/DavidTeejayC" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Twitter" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-twitter"></i></a>
                                <a href="https://plus.google.com/112517983973843716765" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Google+" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-google-plus"></i></a>
                            </div>
                            <h3>Website and Mobile App Developer</h3>
                            <a href="#wrapper2" className="to-about next bubble btn-floating z-depth-0 transparent center"><i className="mdi mdi-chevron-double-down"></i></a>
                        </div>
                    </div>
                    <div className="col l6 hide-on-med-and-down"></div>
                </div>
            </div>
        )
    }
}
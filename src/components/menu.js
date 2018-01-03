import React, { Component } from 'react';
import 'jquery';

export default class Menu extends Component {
    render(){
        return (
            <div className="menu-container">
                <div className="menu">
                    <a href="#!" data-activates="sideMenu" className="button-collapse"><i className="mdi mdi-sort-variant"></i></a>
                </div>
                <div className="side-nav valign-wrapper" id="sideMenu">
                    <div className="valign row">
                        <div className="col s12 m6" id="col1">
                            <h5><a className="link" href="#wrapper1">My Bio</a></h5>
                            <h5><a className="link" href="#things-do">Things I Do</a></h5>
                            <h5><a className="link" href="#skills">My Skills</a></h5>
                            <h5><a className="link" href="#testimonials">Testimonials</a></h5>
                            <h5><a className="link" href="#wrapper3">Portfolio</a></h5>
                            <h5><a className="link" href="#wrapper4">Contact Me</a></h5>
                        </div>
                        <div className="col s12 m6" id="col2">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
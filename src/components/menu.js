import React, { Component } from 'react';
import $ from 'jquery';
import 'materialize-css';

export default class Menu extends Component {
    componentDidMount(){        
        $('a.button-collapse').sideNav({
            menuwidth: '100%',
            closeOnClick: true,
            draggable: true,
            onOpen: () => {
                $('i.mdi-sort-variant').removeClass('mdi-sort-variant')
                                       .addClass('mdi-close')
            },
            onClose: () => {
                $('i.mdi-close').removeClass('mdi-close')
                                .addClass('mdi-sort-variant')
            },
            inDuration: 600,
            outDuration: 600
        })
    }

    handleClick(e){
        e.preventDefault();

        let loc = e.target.hash;

        $('html, body').animate({
            scrollTop: $(loc).offset().top
        }, 1000, "easeInOutExpo");
    }

    fillUp(e){
        e.preventDefault();

        e.target.classList.add('fill');
    }

    empty(e){
        e.preventDefault();

        e.target.classList.remove('fill');
    }

    render(){
        return (
            <div className="menu-container">
                <div className="menu">
                    <a href="#!" style={{display: 'none'}} data-activates="sideMenu" className="button-collapse"><i className="mdi mdi-sort-variant"></i></a>
                </div>
                <div className="side-nav valign-wrapper" id="sideMenu">
                    <div className="valign row">
                        <div className="col s12 m6" id="col1">
                            <h5><a className="link" onClick={this.handleClick.bind(this)} onMouseEnter={this.fillUp.bind(this)} onMouseLeave={this.empty.bind(this)} href="#wrapper1">My Bio</a></h5>
                            <h5><a className="link" onClick={this.handleClick.bind(this)} onMouseEnter={this.fillUp.bind(this)} onMouseLeave={this.empty.bind(this)} href="#things-do">Things I Do</a></h5>
                            <h5><a className="link" onClick={this.handleClick.bind(this)} onMouseEnter={this.fillUp.bind(this)} onMouseLeave={this.empty.bind(this)} href="#wrapper3">Portfolio</a></h5>
                            <h5><a className="link" onClick={this.handleClick.bind(this)} onMouseEnter={this.fillUp.bind(this)} onMouseLeave={this.empty.bind(this)} href="#skills">My Skills</a></h5>
                            <h5><a className="link" onClick={this.handleClick.bind(this)} onMouseEnter={this.fillUp.bind(this)} onMouseLeave={this.empty.bind(this)} href="#testimonials">Testimonials</a></h5>
                            <h5><a className="link" onClick={this.handleClick.bind(this)} onMouseEnter={this.fillUp.bind(this)} onMouseLeave={this.empty.bind(this)} href="#wrapper4">Get In Touch</a></h5>
                        </div>
                        <div className="col s12 m6" id="col2">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
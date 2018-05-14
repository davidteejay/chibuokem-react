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
                    <a href="#!" data-activates="sideMenu" className="button-collapse"><i className="mdi mdi-sort-variant"></i></a>
                </div>
                <div className="side-nav valign-wrapper" id="sideMenu">
                    <div className="valign row">
                        <div className="col s12 m6" id="col1">
                            <h5><a className="link" onMouseEnter={this.fillUp.bind(this)} onMouseLeave={this.empty.bind(this)} href="/">My Bio</a></h5>
                            <h5><a className="link" onMouseEnter={this.fillUp.bind(this)} onMouseLeave={this.empty.bind(this)} href="/skills">Things I Do</a></h5>
                            <h5><a className="link" onMouseEnter={this.fillUp.bind(this)} onMouseLeave={this.empty.bind(this)} href="/portfolio">Portfolio</a></h5>
                            <h5><a className="link" onMouseEnter={this.fillUp.bind(this)} onMouseLeave={this.empty.bind(this)} href="/testimonials">Testimonials</a></h5>
                            <h5><a className="link" onMouseEnter={this.fillUp.bind(this)} onMouseLeave={this.empty.bind(this)} href="/contact">Get In Touch</a></h5>
                        </div>
                        <div className="col s12 m6" id="col2">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
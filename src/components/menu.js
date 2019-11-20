import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import 'materialize-css';

export default class Menu extends Component {
    componentDidMount(){        
        $('a.button-collapse').sideNav({
            menuwidth: '100%',
            closeOnClick: true,
            draggable: true,
            onOpen: () => {
                $('i.mdi-menu').removeClass('mdi-menu')
                                       .addClass('mdi-close')
            },
            onClose: () => {
                $('i.mdi-close').removeClass('mdi-close')
                                .addClass('mdi-menu')
            },
            inDuration: 600,
            outDuration: 600
        })
    }

    render(){
        return (
            <div className="menu-container">
                <div className={ this.props.dark ? "dark menu" : "menu" }>
                    <a href="#!" data-activates="sideMenu" className="button-collapse">
                        MENU
                        <i className="mdi mdi-menu"></i>
                    </a>
                </div>
                <div className="side-nav valign-wrapper" id="sideMenu">
                    <div className="valign row">
                        <div className="col s12 m6" id="col1">
                            <h5>
                                <a href="#wrapper1" className="link">
                                    <span>My Bio</span>
                                </a>
                            </h5>
                            <h5>
                                <a className="link" href="#wrapper2">
                                    <span>Things I Do</span>
                                </a>
                            </h5>
                            <h5>
                                <a className="link" href="#wrapper3">
                                    <span>Portfolio</span>
                                </a>
                            </h5>
                            {/* <h5>
                                <a className="link" href="/testimonials">
                                    <span>Testimonials</span>
                                </Link>
                            </h5> */}
                            <h5><a className="link" target="_black" href="//blog.chibuokem.me">Blog</a></h5>
                            <h5>
                                <a className="link" href="#wrapper4">
                                    <span>Get In Touch</span>
                                </a>
                            </h5>
                        </div>
                        <div className="col s12 m6" id="col2">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

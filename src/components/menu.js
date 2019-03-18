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
                                <Link to="/" className="link">
                                    <span>My Bio</span>
                                </Link>
                            </h5>
                            <h5>
                                <Link className="link" to="/skills">
                                    <span>Things I Do</span>
                                </Link>
                            </h5>
                            <h5>
                                <Link className="link" to="/portfolio">
                                    <span>Portfolio</span>
                                </Link>
                            </h5>
                            <h5>
                                <Link className="link" to="/testimonials">
                                    <span>Testimonials</span>
                                </Link>
                            </h5>
                            <h5><a className="link" target="_black" href="//blog.chibuokem.me">Blog</a></h5>
                            <h5>
                                <Link className="link" to="/contact">
                                    <span>Get In Touch</span>
                                </Link>
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

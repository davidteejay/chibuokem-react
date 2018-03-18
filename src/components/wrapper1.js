import React, { Component } from 'react';
import $ from 'jquery';
import 'materialize-css';

export default class Wrapper1 extends Component {
    componentDidMount(){
        $('.parallax').parallax();
    }
    
    handleClick(e){
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: $("#wrapper2").offset().top
        }, 1000, "easeInOutExpo");
    }
    
    render(){
        return (
            <div className="wrapper1" id="wrapper1">
                <div className="row">
                    <div className="col l6 m12 hide-on-med-and-down"></div>
                    <div className="col l6 m12 valign-wrapper">
                        <div className="content valign">
                            <h4>Hi, I'm</h4>
                            <h1 className="light">Chibuokem Onyekwelu</h1>
                            <p className="light">
                                I'm a full-stack Web and Mobile app developer, sometimes my work includes traditional graphic design.
                                <br/><br/>
                                I currently work at <b>Elite Media Agency</b>, bringing infinite creativity to designs. When I'm not doing any of those, you can find me <b className="blue-text">playing a game</b> or <b className="blue-text">seeing a movie</b>
                            </p>
                            <div className="social">
                                <a href="https://github.com/davidteejay" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="GitHub" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-github-circle"></i></a>
                                <a href="https://linkedin.com/in/chibuokem-onyekwelu" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="LinkedIn" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-linkedin"></i></a>
                                <a href="https://facebook.com/chibuokem.onyekwelu" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Facebook" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-facebook"></i></a>
                                <a href="https://instagram.com/i_am_tushh" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Instagram" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-instagram"></i></a>
                                <a href="https://twitter.com/DavidTeejayC" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Twitter" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-twitter"></i></a>
                                <a href="https://plus.google.com/112517983973843716765" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Google+" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-google-plus"></i></a>
                            </div>
                            <div onClick={this.handleClick.bind(this)} className="to-about next center"><span className="dot"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import $ from 'jquery';

export default class Wrapper1 extends Component {
    render(){
        return (
            <div className="wrapper1" id="wrapper1">
                <div className="row">
                    <div className="col m6 s12 hide-on-small-only"></div>
                    <div className="col m6 s12 valign-wrapper">
                        <div className="content valign">
                            <h4>Hi, I'm</h4>
                            <h1 className="light">Chibuokem Onyekwelu</h1>
                            <p className="light">
                                Nostrud labore aute exercitation dolor eiusmod ullamco incididunt sit ipsum sint sit qui. Voluptate ex fugiat Lorem ipsum. Velit anim pariatur officia dolore ex enim enim. Laborum eiusmod do adipisicing et ullamco esse excepteur excepteur tempor ex aliquip eu. Labore duis officia excepteur excepteur irure laborum incididunt labore tempor cupidatat cillum veniam dolor reprehenderit. <br/><br/>
                                Nostrud fugiat officia aute eu culpa dolore reprehenderit in elit exercitation consectetur. Incididunt sit sint in aute cupidatat. Non mollit elit laboris adipisicing fugiat cillum ut ea nisi excepteur aute sint adipisicing labore. Sit sit enim exercitation ipsum proident.
                            </p>
                            <div className="social">
                                <a href="https://github.com/davidteejay" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="GitHub" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-github-circle"></i></a>
                                <a href="https://linkedin.com/in/chibuokem-onyekwelu" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="LinkedIn" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-linkedin"></i></a>
                                <a href="https://facebook.com/chibuokem.onyekwelu" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Facebook" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-facebook"></i></a>
                                <a href="https://instagram.com/i_am_tushh" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Instagram" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-instagram"></i></a>
                                <a href="https://twitter.com/DavidTeejayC" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Twitter" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-twitter"></i></a>
                                <a href="https://plus.google.com/112517983973843716765" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Google+" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-google-plus"></i></a>
                            </div>
                            <a href="#wrapper2" className="to-about next bubble btn-floating z-depth-0 transparent center"><i className="mdi mdi-chevron-double-down"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

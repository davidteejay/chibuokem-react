import React, { Component } from 'react';
import $ from 'jquery';

export default class Wrapper5 extends Component {
    componentDidMount(){
        $('.slider').slider({
            interval: 4500,
            transition: 1000
        });
    }

    render(){
        return (
            <div className="wrapper5 page" id="wrapper5">
                <div className="testimonials" id="testimonials">
                    <h4 className="light center">HERE'S WHAT PEOPLE ARE SAYING ABOUT ME:</h4>
                    <div className="underline2 slideanim"></div>
                    <div className="slider">
                        <ul className="slides">
                            <li style={{ backgroundImage: 'url(https://cdn.rawgit.com/davidteejay/chibuokem/master/src/images/paul.jpg)', backgroundPosition: 'top center' }}>
                                <div className="valign-wrapper">
                                    <div className="valign caption left-align">
                                        <p className="light white-text" style={{ textAlign: 'justify' }}>I have known <b>Chibuokem</b> well over two years and have seen in him an avid learner obsessed with self development. He has worked with me on a handful of projects and shows great promise, he gives his best shot all the time and delivers within the alloted timeframe.</p>
                                        <br/>
                                        <p className="referrer">Banjo Mofesola Paul</p>
                                        <p className="ref-title light">CTO & Co-founder, Planet NEST.</p>
                                    </div>
                                </div>
                            </li>
                            <li style={{ backgroundImage: 'url(https://cdn.rawgit.com/davidteejay/chibuokem/master/src/images/isaac.jpg)', backgroundPosition: 'top center' }}>
                                <div className="valign-wrapper">
                                    <div className="valign caption left-align">
                                        <p className="light white-text" style={{ textAlign: 'justify' }}><b>Chibuokem</b> is a developer with experience, passion and great skill set. A developer ready to work, learn and explore. He is a developer I would definitely like to have at close reach.</p>
                                        <br/>
                                        <p className="referrer">Akinbosede Oluwatemilorun Isaac</p>
                                        <p className="ref-title light">CEO, Rainbow Hub.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
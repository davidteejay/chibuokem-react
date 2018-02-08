import React, { Component } from 'react';
import bg from '../images/image2.jpg';
import $ from 'jquery';
import Materialize from 'materialize-css';

export default class Wrapper4 extends Component {
    componentDidMount(){
        let options = [
            { selector: '#social-menu', offset: 300, callback: function(el) {
                Materialize.showStaggeredList($(el));
            } 
            },
            { selector: "#social-menu2", offset: 300, callback:function(el){
                Materialize.showStaggeredList($(el));
            } 
            }
        ];
        
        Materialize.scrollFire(options);
    }
    render(){
        let style = {
            display: 'none'
        }
        return (
            <div className="wrapper4 parallax-container" id="wrapper4">
                <div className="row">
                    <h3 className="light center slideanim">GET IN TOUCH</h3>
                    <div className="underline slideanim"></div>
                    <div className="col s10">
                        <p className="slideanim3 light">I'd love to hear from you. Fill the form below if you want to discuss about a project, or if you have anything at all to discuss with me</p>
                        <form className="row" action="https://formspree.io/chibuokem_tolu@hotmail.com" method="post">
                            <div className="input-field col s12 slideanim3">
                                <label htmlFor="fname">Name</label>
                                <input type="text" id="fname" name="fname" required/>
                            </div>
                            <div className="input-field col m6 s12 slideanim3">
                                <label htmlFor="topic">Topic</label>
                                <input type="text" id="topic" name="_subject" required/>
                            </div>
                            <div className="input-field col m6 s12 slideanim3">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required/>
                            </div>
                            <div className="input-field col s12 slideanim3">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" className="materialize-textarea" required></textarea>
                                <input type="text" name="_gotcha" style={style} />
                                <input type="hidden" name="_next" value="http://chibuokem.herokuapp.com/#thanks" />
                            </div>
                            <div className="input-field col s12 slideanim3">
                                <button type="submit" className="btn teal darken-2 z-depth-0 waves-effect waves-light">SEND</button>
                            </div>
                        </form>
                    </div>
                    <div className="col s2 center">
                        <ul className="social-menu" id="social-menu2">
                            <li><a href="https://github.com/davidteejay" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="GitHub" data-position="left" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-github-circle"></i></a></li>
                            <li><a href="https://linkedin.com/in/chibuokem-onyekwelu" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="LinkedIn" data-position="left" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-linkedin"></i></a></li>
                            <li><a href="https://facebook.com/chibuokem.onyekwelu" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Facebook" data-position="left" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-facebook"></i></a></li>
                            <li><a href="https://instagram.com/i_am_tushh" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Instagram" data-position="left" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-instagram"></i></a></li>
                            <li><a href="https://twitter.com/DavidTeejayC" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Twitter" data-position="left" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-twitter"></i></a></li>
                            <li><a href="https://plus.google.com/112517983973843716765" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Google+" data-position="left" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-google-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="parallax"><img src={bg} alt=""/></div>
            </div>
        )
    }
}
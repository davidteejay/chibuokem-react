import React, { Component } from 'react';

export default class Modal extends Component {
    render(){
        return (
            <div className="modal transparent" id="thanks">
                <div className="modal-content">
                    <div className="row valign-wrapper">
                        <div className="valign">
                            <div className="col s10">
                                <h1>Thanks for reaching out</h1>
                                <h4>I'll reply you shortly</h4><br/><br/>
                                <button className="btn red z-depth-0 modal-action modal-close waves-effect waves-light center">&lsaquo; BACK</button>
                            </div>
                            <div className="col s2 center">
                                <ul className="social-menu" id="social-menu">
                                    <li><a href="https://github.com/davidteejay" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="GitHub" data-position="left" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-github-circle"></i></a></li>
                                    <li><a href="https://linkedin.com/in/chibuokem-onyekwelu" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="LinkedIn" data-position="left" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-linkedin"></i></a></li>
                                    <li><a href="https://facebook.com/chibuokem.onyekwelu" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Facebook" data-position="left" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-facebook"></i></a></li>
                                    <li><a href="https://instagram.com/i_am_tushh" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Instagram" data-position="left" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-instagram"></i></a></li>
                                    <li><a href="https://twitter.com/DavidTeejayC" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Twitter" data-position="left" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-twitter"></i></a></li>
                                    <li><a href="https://plus.google.com/112517983973843716765" target="_blank" rel="noopener noreferrer" data-delay="50" data-tooltip="Google+" data-position="left" className="btn-floating tooltipped z-depth-0 transparent center"><i className="mdi mdi-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
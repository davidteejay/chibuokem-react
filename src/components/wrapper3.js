import React, { Component } from 'react';
import acm from '../images/acm.png';
// import alawhyte from '../images/alawhyte.jpg';
import bsb from '../images/bsb.png';
import alumni from '../images/alumni.png';

export default class Wrapper3 extends Component {
    render(){
        return (
            <div className="wrapper3" id="wrapper3">
                <h4 className="slideanim center light">HERE ARE A FEW OF THE PROJECTS I'VE WORKED ON:</h4>
                <div className="underline2 slideanim"></div>
                <div className="row" id="portfolio">
                    <div className="col s12 m6 center">
                        <img src={acm} alt="FUTA ACM's Website"/>
                        <h5 className="light center">
                            ASSOCIATION FOR COMPUTING AND MACHINERY: FUTA CHAPTER
                        </h5>
                        <a href="//futa.acm.org" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
                    </div>
                    <div className="col s12 m6 center">
                        <img src={alumni} alt="FUTA ACM's Website"/>
                        <h5 className="light center">
                            ASSOCIATION FOR COMPUTING AND MACHINERY: FUTA CHAPTER
                        </h5>
                        <a href="//futa.acm.org" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6 center">
                        <img src={bsb} alt="FUTA ACM's Website"/>
                        <h5 className="light center">
                            ASSOCIATION FOR COMPUTING AND MACHINERY: FUTA CHAPTER
                        </h5>
                        <a href="//futa.acm.org" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
                    </div>
                    <div className="col s12 m6 center"></div>
                </div>
            </div>
        )
    }
}
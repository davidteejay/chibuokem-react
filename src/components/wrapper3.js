import React, { Component } from 'react';
import Particles from 'react-particles-js';

export default class Wrapper3 extends Component {
    render(){
        return (
            <div className="wrapper3 page" id="wrapper3">
                <h4 className="slideanim center light">HERE ARE A FEW OF THE PROJECTS I'VE WORKED ON:</h4>
                <div className="underline2 slideanim"></div>
                <div className="row" id="portfolio">
                    <div className="col s12 m6 l4 center">
                        <img src="https://cdn.rawgit.com/davidteejay/chibuokem/master/src/images/cpl.png" alt="Christ Praise Chapel Website"/>
                        <h5 className="light center">
                            CHRIST PRAISE CHAPEL'S OFFICIAL WEBSITE
                        </h5>
                        <a href="//thecplchapel.org.ng" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
                    </div>
                    <div className="col s12 m6 l4 center">
                        <img src="https://cdn.rawgit.com/davidteejay/chibuokem/master/src/images/incycle.png" alt="Incycle"/>
                        <h5 className="light center">
                            INCYCLE'S OFFICIAL LANDING PAGE
                        </h5>
                        <a href="//incycle.com.ng" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
                    </div>
                    <div className="col s12 m6 l4 center">
                        <img src="https://cdn.rawgit.com/davidteejay/chibuokem/master/src/images/acm.png" alt="FUTA ACM's Website"/>
                        <h5 className="light center">
                            ASSOCIATION FOR COMPUTING AND MACHINERY: FUTA CHAPTER
                        </h5>
                        <a href="//futa.acm.org" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
                    </div>
                    <div className="col s12 m6 l4 center">
                        <img src="https://cdn.rawgit.com/davidteejay/chibuokem/master/src/images/alumni.png" alt="FUTA Alumni's Website"/>
                        <h5 className="light center">
                            FUTA ALUMNI ASSOCIATION WORLDWIDE 
                        </h5>
                        <a href="//futaalumniworldwide.org" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
                    </div>
                    <div className="col s12 m6 l4 center">
                        <img src="https://cdn.rawgit.com/davidteejay/chibuokem/master/src/images/bsb.png" alt="Best Solution Book's Website"/>
                        <h5 className="light center">
                            BEST SOLUTION BOOKS
                        </h5>
                        <a href="//bestsolutionbooks.com" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
                    </div>
                    <div className="col s12 m6 l4 center">
                        <img src="https://cdn.rawgit.com/davidteejay/chibuokem/master/src/images/alawhyte.png" alt="Alawhyte's Website"/>
                        <h5 className="light center">
                            ALAWHYTE
                        </h5>
                        <a href="//alawhyte.com" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
                    </div>
                </div>
                <Particles className="particles-js" params={particleParams}/>
            </div>
        )
    }
}

const particleParams = {
    "particles": {
        "number": {
            "value": 100,
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 3
            },
        },
        "opacity": {
            "value": 0.3,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#ffffff",
            "opacity": 0.3,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 20
            },
        }
    },
    "retina_detect": true,
    "config_demo": {
        "hide_card": false,
        "background_color": "#080808",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
    }
}

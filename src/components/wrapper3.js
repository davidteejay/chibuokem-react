import React, { Component } from 'react'
import Menu from './menu'

import cpl from '../images/cpl.png'
import incycle from '../images/incycle.png'
import acm from '../images/acm.png'
import alumni from '../images/alumni.png'
import bsb from '../images/bsb.png'
import alawhyte from '../images/alawhyte.png'

export default class Wrapper3 extends Component {
    render(){
        return (
            <div className="wrapper3 scrollspy" id="wrapper3">
                {/* <Menu dark/> */}
                <h4 className="slideanim center light">HERE ARE A FEW OF THE PROJECTS I'VE WORKED ON:</h4>
                <div className="underline2 slideanim"></div>
                <div className="portfolio-row" id="portfolio">
                    <div className="slideanim portfolio-col center tooltipped" data-delay="50" data-tooltip="CHRIST PRAISE CHAPEL'S OFFICIAL WEBSITE" data-position="top">
                        <img src={cpl} alt="Christ Praise Chapel Website"/>
                        <h5 className="light center">
                            CHRIST PRAISE CHAPEL'S OFFICIAL WEBSITE
                        </h5>
                        <a href="//thecplchapel.org.ng" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
                    </div>
                    <div className="slideanim portfolio-col center tooltipped" data-delay="50" data-tooltip="INCYCLE'S OFFICIAL LANDING PAGE" data-position="top">
                        <img src={incycle} alt="Incycle"/>
                        <h5 className="light center">
                            INCYCLE'S OFFICIAL LANDING PAGE
                        </h5>
                        <a href="//incycle.com.ng" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
                    </div>
                    <div className="slideanim portfolio-col center tooltipped" data-delay="50" data-tooltip="ASSOCIATION FOR COMPUTING AND MACHINERY: FUTA CHAPTER" data-position="top">
                        <img src={acm} alt="FUTA ACM"/>
                        <h5 className="light center">
                            ASSOCIATION FOR COMPUTING AND MACHINERY: FUTA CHAPTER
                        </h5>
                        <a href="//futa.acm.org" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
                    </div>
                    <div className="slideanim portfolio-col center tooltipped" data-delay="50" data-tooltip="FUTA ALUMNI ASSOCIATION WORLDWIDE" data-position="top">
                        <img src={alumni} alt="FUTA Alumni"/>
                        <h5 className="light center">
                            FUTA ALUMNI ASSOCIATION WORLDWIDE 
                        </h5>
                        <a href="//futaalumniworldwide.org" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
                    </div>
                    <div className="slideanim portfolio-col center tooltipped" data-delay="50" data-tooltip="BEST SOLUTION BOOKS" data-position="top">
                        <img src={bsb} alt="Best Solutions Books"/>
                        <h5 className="light center">
                            BEST SOLUTION BOOKS
                        </h5>
                        <a href="//bestsolutionbooks.com" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
                    </div>
                    <div className="slideanim portfolio-col center tooltipped" data-delay="50" data-tooltip="ALAWHYTE" data-position="top">
                        <img src={alawhyte} alt="Alawhyte"/>
                        <h5 className="light center">
                            ALAWHYTE
                        </h5>
                        <a href="//alawhyte.com" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
                    </div>
                </div>
            </div>
        )
    }
}

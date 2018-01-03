import React, { Component } from 'react';
import softimony from '../images/softimony.jpg';
import alawhyte from '../images/alawhyte.jpg';
import bsb from '../images/bsb.jpg';
import alumni from '../images/alumni.png';

export default class Wrapper3 extends Component {
    render(){
        return (
            <div className="wrapper3" id="wrapper3">
                <h4 className="slideanim center light">HERE ARE A FEW OF THE PROJECTS I'VE WORKED ON:</h4>
                <div className="underline2 slideanim"></div>
                <div className="row" id="portfolio">
                    <img src={softimony} className="materialboxed slideanim z-depth-0" data-caption="Sofitmony.com" alt="softimony.com"/>
                    <img src={alawhyte} className="materialboxed slideanim z-depth-0" data-caption="Alawhyte.com" alt="alawhyte.com"/>
                    <img src={bsb} className="materialboxed slideanim z-depth-0" alt="bestsolutionbooks.com" data-caption="BestSolutionBooks.com"/>
                    <img src={alumni} className="materialboxed slideanim z-depth-0" alt="futaalumniworldwide.org" data-caption="FUTAAlumniWorldWide.org"/>
                </div>
            </div>
        )
    }
}
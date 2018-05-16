import React, { Component } from 'react';

export default class Wrapper3 extends Component {
    render(){
        return (
            <div className="wrapper3 page" id="wrapper3">
                <h4 className="slideanim center light">HERE ARE A FEW OF THE PROJECTS I'VE WORKED ON:</h4>
                <div className="underline2 slideanim"></div>
                <div className="row" id="portfolio">
                    <div className="col s12 m6 center">
                        <img src="https://cdn.rawgit.com/davidteejay/chibuokem/master/src/images/acm.png" alt="FUTA ACM's Website"/>
                        <h5 className="light center">
                            ASSOCIATION FOR COMPUTING AND MACHINERY: FUTA CHAPTER
                        </h5>
                        <a href="//futa.acm.org" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
                    </div>
                    <div className="col s12 m6 center">
                        <img src="https://cdn.rawgit.com/davidteejay/chibuokem/master/src/images/alumni.png" alt="FUTA Alumni's Website"/>
                        <h5 className="light center">
                            FUTA ALUMNI ASSOCIATION WORLDWIDE 
                        </h5>
                        <a href="//futaalumniworldwide.org" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6 center">
                        <img src="https://cdn.rawgit.com/davidteejay/chibuokem/master/src/images/bsb.png" alt="Best Solution Book's Website"/>
                        <h5 className="light center">
                            BEST SOLUTION BOOKS
                        </h5>
                        <a href="//bestsolutionbooks.com" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
                    </div>
                    <div className="col s12 m6 center">
                        <img src="https://cdn.rawgit.com/davidteejay/chibuokem/master/src/images/alawhyte.png" alt="Alawhyte's Website"/>
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
import React, { Component } from 'react';

export default class NotFound extends Component {
    render(){
        return (
            <div className="not-found page">            
                <div className="valign-wrapper">
                    <div className="valign">
                        <h1>OUCH!!!</h1>
                        <h3>SEEMS LIKE THE PAGE YOU'RE LOOKING FOR DOESN'T EXIST</h3>
                        <h4 onClick={() => window.history.go(-1)}>&lsquo; Go Back</h4>
                    </div>
                </div>
            </div>
        )
    }
}
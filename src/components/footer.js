import React, { Component } from 'react';

export default class Footer extends Component {
    render(){
        let style = {
            display: 'inline'
        }

        return (
            <div className="footer">
            <div class="addthis_inline_follow_toolbox" style={style}></div>
            <p className="right-align light">&copy; Chibuokem Onyekwelu. All rights reserved</p>
        </div>
        )
    }
}
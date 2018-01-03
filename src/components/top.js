import React, { Component } from 'react';
import $ from 'jquery';

export default class To_Top extends Component {
    handleClick(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $('#wrapper1').offset().top
        }, 1000);
    }

    render(){
        return (
            <div>
                <a onClick={this.handleClick.bind(this)} className="to-top to-top-slidedown z-depth-1" href="#wrapper1"><i className="mdi mdi-chevron-up"></i></a>
            </div>
        )
    }
}
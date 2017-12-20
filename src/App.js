import React, { Component } from 'react';
import Wrapper1 from './components/wrapper1';
import Wrapper2 from './components/wrapper2';
import Wrapper3 from './components/wrapper3';
import Wrapper4 from './components/wrapper4';
import Footer from './components/footer';
import Modal from './components/modal';
import ToTop from './components/top';
import './icon/devicon/devicon.min.css';
import './icon/devicon/devicon-colors.css';
import './icon/mdi/css/materialdesignicons.min.css';
import './css/materialize.min.css';
import './css/style.min.css';
import './js/script.min.js';
import './js/jquery.inview.min.js';

export default class App extends Component {
    render(){
        return (
            <div className="wrapper">
                <Modal/>
                <ToTop/>
                <Wrapper1/>
                <Wrapper2/>
                <Wrapper3/>
                <Wrapper4/>
                <Footer/>
            </div>
        )
    }
}
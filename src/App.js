import React, { Component } from 'react';
import Wrapper1 from './components/wrapper1';
import Wrapper2 from './components/wrapper2';
import Wrapper3 from './components/wrapper3';
import Wrapper4 from './components/wrapper4';
import Wrapper5 from './components/wrapper5';
import Footer from './components/footer';
import Modal from './components/modal';
import ToTop from './components/top';
import Menu from './components/menu';
import './icon/devicon/devicon.min.css';
import './icon/mdi/css/materialdesignicons.min.css';
import './css/style.min.css';
import $ from 'jquery';
import 'materialize-css';

export default class App extends Component {
    componentDidMount(){
        $('.modal').modal({
            opacity: 1,
            starting_top: '0%',
            ending_top: '0%',
            complete: function(){
                window.location.hash = "#!"
            }
        });
        
        let hash = window.location.hash;
        if (hash === "#thanks"){
            $(hash).modal('open');
        }
    }
    render(){
        return (
            <div className="wrapper">
                <Modal/>
                <Menu/>
                <Wrapper1/>
                <Wrapper2/>
                <Wrapper3/>
                <Wrapper5/>
                <Wrapper4/>
                <Footer/>
                <ToTop/>
            </div>
        )
    }
}
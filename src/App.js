import React, { Component } from 'react';
import Wrapper1 from './components/wrapper1';
import Wrapper2 from './components/wrapper2';
import Wrapper3 from './components/wrapper3';
import Wrapper4 from './components/wrapper4';
import Wrapper5 from './components/wrapper5';
import Modal from './components/modal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/menu';
import './icon/mdi/css/materialdesignicons.min.css';
import './css/materialize.min.css';
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
            <Router>
                <div className="wrapper">
                    <Modal/>
                    <Menu/>
                    <Switch>
                        <Route exact path="/" component={Wrapper1}/>
                        <Route exact path="/skills" component={Wrapper2}/>
                        <Route exact path="/portfolio" component={Wrapper3}/>
                        <Route exact path="/testimonials" component={Wrapper5}/>
                        <Route exact path="/contact" component={Wrapper4}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

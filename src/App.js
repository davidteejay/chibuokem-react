import React, { Component } from 'react';
import asyncComponent from './asyncComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Menu from './components/menu';
import './icon/mdi/css/materialdesignicons.min.css';
import './css/materialize.min.css';
import './css/style.min.css';
import $ from 'jquery';
import 'materialize-css';

const Wrapper1 = asyncComponent(() => import('./components/wrapper1').then(module => module.default))
const Wrapper2 = asyncComponent(() => import('./components/wrapper2').then(module => module.default))
const Wrapper3 = asyncComponent(() => import('./components/wrapper3').then(module => module.default))
const Wrapper4 = asyncComponent(() => import('./components/wrapper4').then(module => module.default))
const Wrapper5 = asyncComponent(() => import('./components/wrapper5').then(module => module.default))
const Modal = asyncComponent(() => import('./components/modal').then(module => module.default))

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
            <Router history={createBrowserHistory()}>
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

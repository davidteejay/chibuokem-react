import React, { Component } from 'react';
// import asyncComponent from './asyncComponent';
// import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';
import { HashRouter, Switch, Route } from 'react-router-dom'
import './icon/mdi/css/materialdesignicons.min.css';
import './css/materialize.min.css';
import './css/style.min.css';
import 'materialize-css';

import Wrapper1 from './components/wrapper1'
import Wrapper2 from './components/wrapper2'
import Wrapper3 from './components/wrapper3'
import Wrapper4 from './components/wrapper4'
import Wrapper5 from './components/wrapper5'
import Modal from './components/modal'
import NotFound from './components/notFound'

// const Wrapper1 = asyncComponent(() => import('./components/wrapper1').then(module => module.default))
// const Wrapper2 = asyncComponent(() => import('./components/wrapper2').then(module => module.default))
// const Wrapper3 = asyncComponent(() => import('./components/wrapper3').then(module => module.default))
// const Wrapper4 = asyncComponent(() => import('./components/wrapper4').then(module => module.default))
// const Wrapper5 = asyncComponent(() => import('./components/wrapper5').then(module => module.default))
// const Modal = asyncComponent(() => import('./components/modal').then(module => module.default))
// const NotFound = asyncComponent(() => import('./components/notFound').then(module => module.default))

export default class App extends Component {
    render(){
        return (
            <HashRouter>
                <div className="wrapper">
                    <Modal/>
                    <Switch>
                        <Route exact path="/" component={Wrapper1}/>
                        <Route exact path="/skills" component={Wrapper2}/>
                        <Route exact path="/portfolio" component={Wrapper3}/>
                        <Route exact path="/testimonials" component={Wrapper5}/>
                        <Route exact path="/contact" component={Wrapper4}/>
                        <Route exact path="*" component={NotFound}/>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

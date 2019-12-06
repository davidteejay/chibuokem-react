import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './icon/mdi/css/materialdesignicons.min.css'
import './css/materialize.min.css'
import './css/style.min.css'

import Loading from './components/loading'

const Home  = React.lazy(() => import('./pages/Home'))
// const Wrapper1 = React.lazy(() => import('./components/wrapper1'))
// const Wrapper2 = React.lazy(() => import('./components/wrapper2'))
// const Wrapper3 = React.lazy(() => import('./components/wrapper3'))
// const Wrapper4 = React.lazy(() => import('./components/wrapper4'))
// const Wrapper5 = React.lazy(() => import('./components/wrapper5'))
const NotFound = React.lazy(() => import('./components/notFound'))

const FunbanyePP = React.lazy(() => import('./pages/funbanye/Privacy'))
const FunbanyeDonate = React.lazy(() => import('./pages/funbanye/Donate'))

export default class App extends Component {
    render(){
        return (
            <div className="wrapper">
                <Suspense fallback={<Loading/>}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            {/* <Route exact path="/skills" component={Wrapper2} />
                            <Route exact path="/portfolio" component={Wrapper3} />
                            <Route exact path="/testimonials" component={Wrapper5} />
                            <Route exact path="/contact" component={Wrapper4} /> */}
                            <Route exact path="/funbanye/privacy-policy" component={FunbanyePP} />
                            <Route exact path="/funbanye/donate" component={FunbanyeDonate} />
                            <Route exact path="*" component={NotFound} />
                        </Switch>
                    </Router>
                </Suspense>
            </div>
        )
    }
}

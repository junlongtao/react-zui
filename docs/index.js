import React from 'react'
import ReactDOM from 'react-dom'
import FastClick from 'fastclick'
import {HashRouter, BrowserRouter, Route, Switch} from 'react-router-dom'
import asyncComponent from './asyncComponent'

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path='/' component={asyncComponent(() => import('./pages/home'))}/>
            <Route exact path='/tabs' component={asyncComponent(() => import('./pages/tabs'))}/>
            <Route exact path='/tab-bar' component={asyncComponent(() => import('./pages/tab-bar'))}/>


            <Route exact path='/tag' component={asyncComponent(() => import('./pages/tag'))}/>
            <Route exact path='/card' component={asyncComponent(() => import('./pages/card'))}/>
            <Route exact path='/avatar' component={asyncComponent(() => import('./pages/avatar'))}/>
            <Route exact path='/bookmark' component={asyncComponent(() => import('./pages/avatar'))}/>
            <Route exact path='/notice-bar' component={asyncComponent(() => import('./pages/avatar'))}/>


            <Route exact path='/checkbox' component={asyncComponent(() => import('./pages/checkbox'))}/>
            <Route exact path='/list' component={asyncComponent(() => import('./pages/list'))}/>

        </Switch>
    </HashRouter>,
    document.getElementById('container')
)
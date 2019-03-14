import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import ListDesign from '../ListDesign/ListDesign'
import ListTattooer from '../ListTattooer/ListTattooer'
import Tattooer from '../Tattooer/Tattooer';
import Design from '../Design/Design';
import {createBrowserHistory} from 'history';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()}/>
      <Route exact path='/tatuaggi' component={ListDesign} onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()}/>
      <Route exact path='/tatuatori' component={ListTattooer} onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()}/>
      <Route exact path='/tatuatore/:url' component={Tattooer} onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()}/>
      <Route exact path='/tatuatore' component={Tattooer} onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()}/>
      <Route exact path='/tatuaggio/:url' component={Design} onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()}/>
    </Switch>
  </main>
)

export default Main
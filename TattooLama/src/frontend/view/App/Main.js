import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import ListDesign from '../ListDesign/ListDesign'
import ListTattooer from '../ListTattooer/ListTattooer'
import Tattooer from '../Tattooer/Tattooer';
import Design from '../Design/Design';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} onUpdate={() => window.scrollTo(0, 0)}/>
      <Route exact path='/list_design' component={ListDesign} onUpdate={() => window.scrollTo(0, 0)}/>
      <Route exact path='/list_tatuatori' component={ListTattooer} onUpdate={() => window.scrollTo(0, 0)}/>
      <Route exact path='/tatuatore/:url' component={Tattooer} onUpdate={() => window.scrollTo(0, 0)}/>
      <Route exact path='/tatuatore' component={Tattooer} onUpdate={() => window.scrollTo(0, 0)}/>
      <Route exact path='/design/:url' component={Design} onUpdate={() => window.scrollTo(0, 0)}/>
    </Switch>
  </main>
)

export default Main
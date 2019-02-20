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
      <Route exact path='/' component={Home}/>
      <Route exact path='/list_design' component={ListDesign}/>
      <Route exact path='/list_tatuatori' component={ListTattooer}/>
      <Route exact path='/tatuatore/:url' component={Tattooer}/>
      <Route exact path='/tatuatore' component={Tattooer}/>
      <Route exact path='/design/:url' component={Design}/>
    </Switch>
  </main>
)

export default Main
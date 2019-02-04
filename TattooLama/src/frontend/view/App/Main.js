import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import ListDesign from '../ListDesign/ListDesign'
import ListTattooer from '../ListTattooer/ListTattooer'
import Tattooer from '../Tattooer/Tattooer';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/list_design' component={ListDesign}/>
      <Route exact path='/list_tatuatori' component={ListTattooer}/>
      <Route exact path='/tatuatore' component={Tattooer}/>
    </Switch>
  </main>
)

export default Main
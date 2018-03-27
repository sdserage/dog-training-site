import React from 'react';
/* Components */
import {Route, Switch} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Adoption from './components/Adoption/Adoption';
import Troubleshooting from './components/Troubleshooting/Troubleshooting';
import Store from './components/Store/Store';
import NotFound from './components/NotFound/NotFound';

export default (
  <ScrollToTop>
    <Switch>
      <Route exact path='/'           component={Home}/>
      <Route path='/about'            component={About}/>
      <Route path='/services'         component={Services}/>
      <Route path='/adoption'         component={Adoption}/>
      <Route path='/troubleshooting'  component={Troubleshooting}/>
      <Route path='/store'            component={Store}/>
      <Route path='*'                 component={NotFound}/>
    </Switch>
  </ScrollToTop>
);

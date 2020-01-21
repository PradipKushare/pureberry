import React, { Component } from 'react';  
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Footer from 'Components/sub_parts/Footer'
import Header from 'Components/sub_parts/Header'

import NotFound from 'Components/NotFound'
import Home from 'Components/Home/Home'

class RouterConfig extends Component{
 render() {
    return (
      <Router>
         <Header /> 
             <Switch basename={ '/' }>
                <Route exact path={'/'} component={Home}></Route>
                <Route exact path={'/home'} component={Home}></Route>
                <Route component={NotFound}></Route>
              </Switch>
             <Footer />  
        </Router>
  )
 } 
}

export default RouterConfig;
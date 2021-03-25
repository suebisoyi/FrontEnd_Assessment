import React, {useEffect, useState} from 'react';
import Pricing from './components/Pricing';
import Payments from './components/Payments'
import Home from './components/Home'
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Pricing" exact component={Pricing} />
        <Route path="/Payments" exact component={Payments} />
      </Switch>
    </Router>
  );
}
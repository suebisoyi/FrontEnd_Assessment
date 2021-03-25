
import React from 'react';
import {Route, IndexRoute, Link} from 'react-router';

import Application from '../App';
import Pricing from './Pricing';
import Payments from './Payments';

export default (
    <Route component={Application} path='/'>
      <Route component={Pricing} path='pricing' />
      <Route component={Payments} path='payments' />
    </Route>
);
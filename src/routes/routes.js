import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import CountriesList from '../screens/CountriesList';

  import CountryDetails from '../screens/CountryDetails';

  import { history } from './history';

function Routes() {
    return (
        <div>
        <Router history={history}>
            <Switch>
                <Route path="/country" component={CountryDetails} /> 
                <Route path="/" component={CountriesList} /> 
            </Switch>
        </Router>
        </div>
    )
}

export default Routes;

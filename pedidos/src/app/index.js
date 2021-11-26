import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import {ROUTES} from '../constants/routes';
import Login from './screens/Login';
import NuevosPedidos from './components/NuevoPedidos';
import PendingOrders from './components/PendingOrders';

const App = () => (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route
              exact
              path="/"
              render={() => {
                return (
                        <Redirect to={ROUTES.LOGIN}/>
                )
              }}
          />
          <Route exact path={ROUTES.LOGIN} component={Login}/>
          <Route exact path={ROUTES.CONTENT} component={NuevosPedidos}/>
          <Route exact path={ROUTES.PENDING} component={PendingOrders}/>
          <Route exact path={ROUTES.BACKORDERS} component={NuevosPedidos}/>
        </Switch>
      </Suspense>
    </Router>
);
  

  
  export default App;

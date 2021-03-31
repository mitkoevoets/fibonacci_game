import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from '../styles/global-styles';
import './style/bootstrap.min.css';
import './style/sb-admin.css';
import { Dashboard } from "./pages/Dashboard";

export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route
          exact
          path={process.env.PUBLIC_URL + '/'}
          component={Dashboard}
        />
        <Route component={Dashboard} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

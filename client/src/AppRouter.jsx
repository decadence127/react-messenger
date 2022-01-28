import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthRoutes, PublicRoutes } from './routes/pageStore'
let isAuth = true;

const AppRouter = () => {
  console.log(isAuth)
  return (
    <Switch>
      {isAuth && AuthRoutes.map(({ path, component }) => (
        <Route key={path} path={path} component={component} exact />
      ))}
      {PublicRoutes.map(({ path, component }) => (<Route key={path} path={path} component={component} exact />))}
      {isAuth ? <Redirect from="*" to="/messages" /> : <Redirect to="/" />}
    </Switch>
  );
};

export default AppRouter;
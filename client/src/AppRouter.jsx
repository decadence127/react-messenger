import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoutes, PublicRoutes } from './routes/pageStore'
let isAuth = true;

const AppRouter = () => {
  return (
    <Switch>
      {isAuth && AuthRoutes.map(({ path, component }) => (
        <Route key={path} path={path} component={component} exact />
      ))}
      {PublicRoutes.map(({ path, component }) => (<Route key={path} path={path} component={component} exact />))}
    </Switch>
  );
};

export default AppRouter;
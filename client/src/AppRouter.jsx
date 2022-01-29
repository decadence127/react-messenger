import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthRoutes, PublicRoutes } from './routes/pageStore'


const AppRouter = () => {
  const { userData } = useSelector(state => state.userReducer)
  console.log(userData.isAuth)
  return (
    <Switch>
      {userData.isAuth && AuthRoutes.map(({ path, component }) => (
        <Route key={path} path={path} component={component} exact />
      ))}
      {PublicRoutes.map(({ path, component }) => (<Route key={path} path={path} component={component} exact />))}
      {userData.isAuth ? <Redirect from="*" to="/messages" /> : <Redirect to="/" />}
    </Switch>
  );
};

export default AppRouter;
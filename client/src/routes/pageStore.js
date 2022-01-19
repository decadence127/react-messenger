import { HOME_ROUTE, USERS_ROUTE, USER_ROUTE, AUTH_ROUTE } from "./routeNames";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import UserPage from "../pages/UserPage";
import AuthPage from "../pages/AuthPage";

export const AuthRoutes = [
  {
    path: HOME_ROUTE,
    component: HomePage,
  },
  {
    path: USERS_ROUTE,
    component: UsersPage,
  },
  {
    path: USER_ROUTE,
    component: UserPage,
  },
];
export const PublicRoutes = [
  {
    path: AUTH_ROUTE,
    component: AuthPage,
  },
  {
    path: USERS_ROUTE,
    component: UsersPage,
  },
];

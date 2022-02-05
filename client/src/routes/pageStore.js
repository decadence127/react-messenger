import {
  HOME_ROUTE,
  USERS_ROUTE,
  USER_ROUTE,
  AUTH_ROUTE,
  MESSAGES_ROUTE,
} from "./routeNames";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import UserPage from "../pages/UserPage";
import AuthPage from "../pages/AuthPage";
import MessagesPage from "../pages/MessagesPage";

export const AuthRoutes = [
  {
    path: USERS_ROUTE,
    component: UsersPage,
  },
  {
    path: USER_ROUTE,
    component: UserPage,
  },
  {
    path: MESSAGES_ROUTE,
    component: MessagesPage,
  },
];
export const PublicRoutes = [
  {
    path: HOME_ROUTE,
    component: HomePage,
  },
  {
    path: USERS_ROUTE,
    component: UsersPage,
  },
  {
    path: AUTH_ROUTE,
    component: AuthPage,
  },
];

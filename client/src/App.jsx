import React from 'react';
import Header from './Components/Header/Header';
import AppRouter from './AppRouter';
import { useDispatch, useSelector } from 'react-redux';
import { validateUser } from "./store/reducers/userActions";
import { useEffect } from 'react';
import AuthService from './http/Services/AuthService';


function App() {
  const dispatch = useDispatch();
  const handleUnload = (e) => {
    e.preventDefault();
    AuthService.changeActivityToOffline(localStorage.getItem("uid"))
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(validateUser())
    }
    window.addEventListener('unload', handleUnload, true)

    return () => {
      window.removeEventListener('unload', handleUnload, true)
    }
  }, [])


  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;

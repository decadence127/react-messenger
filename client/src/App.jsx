import React from 'react';
import Header from './Components/Header/Header';
import AppRouter from './AppRouter';
import { useDispatch } from 'react-redux';
import { validateUser } from "./store/reducers/userActions";
import { useEffect } from 'react';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(validateUser())
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

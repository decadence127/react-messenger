import React from 'react';
import Header from './Components/Header/Header';
import AppRouter from './AppRouter';
import { useDispatch, useSelector } from 'react-redux';
import store from './store/store';
import { userSlice, validateUser } from './store/reducers/userSlice';
import { useEffect } from 'react';



function App() {
  const dispatch = useDispatch();
  const { userData, isLoading, errors } = useSelector(state => state.userReducer)


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

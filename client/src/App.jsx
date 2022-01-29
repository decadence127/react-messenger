import React from 'react';
import Header from './Components/Header/Header';
import AppRouter from './AppRouter';
import { useDispatch, useSelector } from 'react-redux';
import store from './store/store';
import { userSlice } from './store/reducers/userSlice';
function App() {

  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;

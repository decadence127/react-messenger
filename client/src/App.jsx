import React from 'react';
import Header from './Components/Header/Header';
import AppRouter from './AppRouter';
import { useDispatch, useSelector } from 'react-redux';
import store from './store/store';
import { userSlice } from './store/reducers/userSlice';
function App() {
  const { login } = userSlice.actions;
  const dispatch = useDispatch()
  const { userData } = useSelector(state => state.userReducer)
  console.log(userData.userName, ' ', login('asdd'));
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;

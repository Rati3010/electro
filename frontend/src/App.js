import React, { useEffect } from 'react';
import './App.css';
import AllRouter from './features/pages/AllRouter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import { selectLoggedInUser } from './features/auth/authSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
      dispatch(fetchLoggedInUserAsync(user.id))
    }
  },[dispatch, user])
  return (
    <div className="App">
      <AllRouter/>
    </div>
  );
}

export default App;

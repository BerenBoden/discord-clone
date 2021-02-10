import React, { useEffect } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import Chat from "./components/chat/Chat";
import Login from './components/login/Login';
import { selectUser } from "./features/userSlice";
import { auth } from './firebase'
import "./App.css";
import { login, logout } from './features/userSlice'

function App() {
  //Set up login
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if (authUser){
        // The user is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        // The user is logged out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;

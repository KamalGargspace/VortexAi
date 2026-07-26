import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../utils/firebase";
import api from "../utils/axios";
import Home from "./pages/Home";
import { useEffect } from "react";
import getCurrentUser from "./features/getCurrentUser.js";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/userSlice.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      const data = await getCurrentUser();
      dispatch(setUserData(data));
    };
    getUser();
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;

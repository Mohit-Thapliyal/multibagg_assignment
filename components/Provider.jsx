"use client"
import { useState, React } from "react";
import {MyContext} from "./Context"

function Provider({children}) {
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState({});

  const loginHandler = (user) => {
    setIsLogin(true)
    setUser(user)
  }

  return (
    <div>
      <MyContext.Provider value={{ isLogin, user, loginHandler }}>
        {children}
      </MyContext.Provider>
    </div>
  );
}

export default Provider;
import React from "react";
import { useState, useEffect, createContext, useContext } from "react";

const Context = createContext();

const ContextApiUsers = ({ children }) => {
  const [UserData, setUserData] = useState();
  const FetchUser = async () => {
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    let Users = await result.json();
    setUserData(Users);
  };

  useEffect(() => {
    FetchUser();
  }, []);

  return (
    <Context.Provider value={{ UserData, setUserData }}>
      {children}
    </Context.Provider>
  );
};

export default ContextApiUsers;

export const GetUserContext = () => {
  return useContext(Context);
};

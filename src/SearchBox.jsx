import React from "react";
import { styled } from "styled-components";
import { GetUserContext } from "./ContextApiUsers";

const SearchBox = () => {
  const { UserData, setUserData } = GetUserContext();
  console.log(UserData);

  const SearchUser = (e) => {
    let searchinput = e.target.value;
    let filter = UserData.filter((item) => {
      return item.name == searchinput;
    });
    return filter;
  };

  const DebounceFunction = (fn, delay) => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        SearchUser();
      }, 300);
    };
  };

  return (
    <InputBox type="text" onChange={SearchUser} placeholder="Search User" />
  );
};

export default SearchBox;

const InputBox = styled.input`
  width: 100%;
  font-size: 1rem;
  border: 1px solid red;
  padding: 10px;
  outline: none;
`;

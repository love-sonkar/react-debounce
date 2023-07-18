import { styled } from "styled-components";

const SearchBox = ({ SearchItem }) => {
  return (
    <InputBox type="text" onChange={SearchItem} placeholder="Search User" />
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

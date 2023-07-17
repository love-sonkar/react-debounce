import React from "react";
import { styled } from "styled-components";

const UserList = ({ datas }) => {
  return (
    <UserWrapper>
      <Name>{datas?.name}</Name>
      <EmailWrapper>
        <Para>Email: {datas?.email}</Para>
        <Para>City: {datas?.website}</Para>
      </EmailWrapper>
    </UserWrapper>
  );
};

export default UserList;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  border: 1px solid green;
`;

const Name = styled.h2`
  font-size: 1rem;
`;

const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Para = styled.p`
  font-size: 0.8rem;
`;

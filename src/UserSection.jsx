import { styled } from "styled-components";
import SearchBox from "./SearchBox";
import { GetUserContext } from "./ContextApiUsers";
import UserList from "./UserList";
import { useState } from "react";

const UserSection = () => {
  const { UserData } = GetUserContext();
  const [searchTerm, setSearchterm] = useState("");

  const SearchItem = (e) => {
    const inputvalue = e.target.value.toLowerCase().trim();
    setSearchterm(inputvalue);
  };

  const filterElement = UserData?.filter((item) => {
    if (searchTerm == "") return item;
    else {
      return item.name.toLowerCase().includes(searchTerm);
    }
  });

  console.log(filterElement);

  return (
    <UserSectionWrapper>
      <Heading>Search User</Heading>
      <div>
        <SearchBox SearchItem={SearchItem} />
      </div>
      <UserContainer>
        {filterElement && filterElement?.length === 0 ? (
          <h2>No User Here</h2>
        ) : (
          filterElement?.map((item) => {
            return <UserList key={item.id} datas={item} />;
          })
        )}
      </UserContainer>
    </UserSectionWrapper>
  );
};

export default UserSection;

const UserSectionWrapper = styled.div`
  background: white;
  height: 80%;
  width: 80%;
  border: 1px solid red;
  border-radius: 1.25rem;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0.625rem 0.625rem 0.375rem rgba(0, 0, 0, 0.4);
  @media (min-width: 768px) {
    width: 400px;
  }
`;

const Heading = styled.h2`
  font-size: 1.8rem;
  text-align: center;
`;

const UserContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

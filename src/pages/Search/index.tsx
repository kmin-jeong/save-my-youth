import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Header } from '../../components/Header'
import { Searchicon } from '../../asset/searchicon';



const StyledContainer = styled.div`
  margin: 30px 30px 20px 10px;
  width: 400px;
  height: 45px;
  border: 3px solid #1569CB;
  border-radius:10px;
  display:flex;
  background-color: #FFFFFF;
  align: center;
`;

// background-color: #eaeaea;
const StyledSearch = styled.input`
  border: 0;
  padding-left: 10px;
  border-radius:10px;
  width: 100%;
  height: 100%;
  outline: none;
`;
// onClick={() => console.log("")}
const StyledSearchIcon = styled.div`
margin: 10px 10px 10px 10px;
padding-bottom:10px;
display:flex;
width:30px;
height:30px;
font-size: 40px;
`;

const StyledBox = styled.div`
    display: flex;
    align-items:center;
    @media screen and (min-width: 500px) and (max-width: 2000px) {
        flex-direction: column;
        align-items:flex-end;
        display: none;
    }
`;

const Search = () => {
  const [keyword, setKeyword] = useState<string>("");
  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };
  return (
    <StyledBox>
      <StyledContainer>
        <StyledSearch value={keyword} onChange={onChangeData} />
        <StyledSearchIcon>
          <Searchicon />
        </StyledSearchIcon>
      </StyledContainer>
    </StyledBox>
  );
}
export default Search;

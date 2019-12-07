import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { movieActions } from '../store/ducks/movies';

const Wrap = styled.div`
  height: 80px;
  padding: 0 30px;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Grow = styled.div`
  flex: 1;
`;

const Search = styled.input`
  border-radius: 20px;
  border: 1px solid #ddd;
  outline: none;
  padding: 10px 12px;
  width: 200px;
  font-size: 14px;
`;

const Logo = styled.span`
  font-weight: bold;
  font-size 40px;
  color: #f1c40f;
  font-family: impact;
  cursor: pointer;
`;

function Navbar() {
  const history = useHistory(),
    dispatch = useDispatch();

  return (
    <Wrap>
      <Logo onClick={() => history.push('/')}>IMDb</Logo>
      <Grow/>
      <Search 
        placeholder='Search...'
        onChange={e => {
          dispatch(movieActions.searchDebounced({ name: e.target.value }));
        }}
      />
    </Wrap>
  );
}

export default Navbar;
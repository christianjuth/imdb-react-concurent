import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

const GridWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 30px;
`;

const PosterWrap = styled.div`
  width: ${100/6}%;
  padding-top: 26.5%;
  position: relative;
  cursor: pointer;
`;

const Poster = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-size: cover;
  background-position: center;
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: scale(1.05);
    z-index: 100;
  }
`;

function HomeScreen() {
  const  history = useHistory(),
    searchResults = useSelector((s: any) => s.movies.searchResults);


  return (
    <GridWrap>
      {searchResults.map((r: any) => (
        <PosterWrap key={r.imdbid}>
          <Poster style={{backgroundImage: `url(${r.poster})`}} onClick={() => {
            history.push(`/${r.imdbid}`);
          }}/>
        </PosterWrap>
      ))}
    </GridWrap>
  );
}

export default HomeScreen;
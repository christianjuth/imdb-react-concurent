import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from "react-router-dom";
import { serverActions } from '../server';
import styled from 'styled-components';
import { ActivityIndicator } from '../components';
import Image from '../components/Image';

const PosterWrap = styled.div`
  min-width: 30%;
  max-width: 30%;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 45px;
  margin-bottom: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const P = styled.span`
  font-size: 18px;
  line-height: 26px;
  color: #999;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
`;

const Rating = styled.span`
  font-size: 18px;
  color: #999;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 2px 6px;
`;

const Text = styled.span`
  font-size: 18px;
  color: #999;
`;

const Spacer = styled.div`
  width: 30px;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const Page = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
`;


const Movie = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    setMovie(serverActions.get({ id })); 
  }, [id]);

  if(movie === null) return null;

  const data = movie.read();
  return (
    <>
      <PosterWrap>
        <Image src={data.poster} alt='poster'/>
      </PosterWrap>
      <MovieInfo>
        <Title>{data.title}</Title>
        <Row>
          <Rating>{data.rated}</Rating>
          <Spacer/>
          <Text>{data.year}</Text>
          <Spacer/>
          <Text>{data.runtime}</Text>
          <Spacer/>
          <Text>{data.genres ? data.genres.split(',')[0] : ''}</Text>
        </Row>
        <br/>
        <P>{data.plot}</P>
      </MovieInfo>
    </>
  );
};


function MovieScreen() {
  return (
    <Page>
      <Suspense fallback={<ActivityIndicator style={{height: 'calc(100vh - 160px)'}}/>}>
        <Movie />
      </Suspense>
    </Page>
  );
}

export default MovieScreen;
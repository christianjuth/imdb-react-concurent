import React from 'react';
import { Dots } from 'react-activity';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 100%;
`;

function ActivityIndicator({style}: {style: any}) {
  return (
    <Container style={style}>
      <Dots/>
    </Container>
  );
}

export default ActivityIndicator;
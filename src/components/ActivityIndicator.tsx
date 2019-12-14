import React, { useEffect, useState } from 'react';
import { Dots } from 'react-activity';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 100%;
`;

function ActivityIndicator({style}: {style: any}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setVisible(true);
    }, 600);
    return () => clearTimeout(timeout);
  }, []);

  return visible ? (
    <Container style={style}>
      <Dots/>
    </Container>
  ) : null;
}

export default ActivityIndicator;
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const Poster = styled.img`
  border-radius: 5px;
  width: 100%;
  height: auto;
`;

function wrapPromise(promise) {
  // Set initial status
  let status = 'pending';
  // Store result
  let result;
  // wait for promise
  let suspender = promise.then(
    (res) => {
      status = 'success';
      result = res; 
    },
    (err) => {
      status = 'error';
      result = err;
    }
  );

  return {
    read() {
      console.log(status);
      if(status === 'pending') {
        throw suspender;
      } else if(status === 'error') {
        throw result;
      } else {
        return result;
      }
    }
  }
}

function loadImate(src) {
  let promise = new Promise(resolve => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = resolve;
  });
  return wrapPromise(promise);
}

function Img({src, alt}) {
  const [img, setImg] = useState();

  useEffect(() => {
    setImg(loadImate(src));
  }, [src]);

  if(!img) return null;

  img.read();
  return <Poster src={src} alt={alt} />;
}

export default Img;
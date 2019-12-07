import * as imdb from 'imdb-api';

const config = {
  apiKey: process.env.REACT_APP_IMDB_API_KEY
};

function wrapPromise(promise: Promise<any>) {
  // Set initial status
  let status = 'pending';
  // Store result
  let result: any;
  // wait for promise
  let suspender = promise.then(
    (res: any) => {
      status = 'success';
      result = res; 
    },
    (err: any) => {
      status = 'error';
      result = err;
    }
  );

  return {
    read() {
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

function get({ id }: { id?: string }) {
  return wrapPromise(imdb.get({ id }, config));
}

async function search({ name }: { name: string }) {
  return (await imdb.search({ 
    name
  }, config))
  .results
  .filter(r => r.type === 'movie');
}

export {
  search,
  get
};
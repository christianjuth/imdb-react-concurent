import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

function StoreProvider(props: any) {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
}

export default StoreProvider;
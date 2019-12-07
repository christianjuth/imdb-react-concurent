import React from 'react';
import './App.css';
import 'react-activity/dist/react-activity.css';
import { Navigation } from './navigation';
import StoreProvider from './store/Provider';

function App() {
  return (
    <StoreProvider>
      <Navigation/>
    </StoreProvider>
  );
}

export default App;

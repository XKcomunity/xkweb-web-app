import React, { Fragment } from 'react';
import AtWork from './components/atWork/AtWork'
import HomeCards from './components/home-cards/HomeCards'
import './App.css';

function App() {
  return (
    <Fragment>
      <AtWork />
      <HomeCards />
    </Fragment>
  );
}

export default App;

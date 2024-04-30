import React from 'react';
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import Destinations from './Data';
import './App.css';

const App = () => {
  const travelCards = Destinations.map((destination) => (
    <Card travel={destination} />
  ));

  return (
    <section className='grid-flow' data-spacing='medium'>
      <Header />
      {travelCards}
    </section>
  );
};

export default App;

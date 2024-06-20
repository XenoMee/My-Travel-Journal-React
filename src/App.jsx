import React from 'react';
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import Destinations from './Data';
import './App.css';

const App = () => {
  const travelCards = Destinations.map((destination) => (
    <Card 
      key = {destination.id}
      {...destination} 
    />
  ));

  return (
    <section className='grid-flow' data-spacing='medium'>
      <Header />
      <div className='main-content'>{travelCards}</div>
    </section>
  );
};

export default App;

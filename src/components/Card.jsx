import React from 'react';

const Card = (props) => (
  <div className='travel-card grid-flow'>
    <div className='card-content grid-flow'>
      <div className='card-header'>
        <h2 className='card-title'>{props.travel.title}</h2>
        <div className='card-location'>
          <div className='flex-group'>
            <i className='fa-solid fa-location-dot'></i>
            <p className='card-country'>{props.travel.location}</p>
          </div>
          <a href={`${props.travel.googleMapsUrl}`}>View on Google Maps</a>
        </div>
      </div>

      <div className='card-body'>
        <span className='card-date'>
          {props.travel.startDate} - {props.travel.endDate}
        </span>
        <p className='card-description'>{props.travel.description}</p>
      </div>
    </div>

    <img
      src={`${props.travel.imageUrl}`}
      alt={`${props.travel.title}`}
      className='card-image'
    />
  </div>
);

export default Card;

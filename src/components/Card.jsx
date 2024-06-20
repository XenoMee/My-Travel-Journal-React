import React from 'react';

const Card = (props) => (
  <div className='travel-card grid-flow'>
    <div className='card-content grid-flow' data-spacing='medium'>
      <div className='card-header'>
        <h2 className='card-title'>{props.title}</h2>
        <div className='card-location flex-group'>
          <div className='flex-group'>
            <i className='location-icon fa-solid fa-location-dot'></i>
            <p className='card-country'>{props.location}</p>
          </div>
          <a href={`${props.googleMapsUrl}`}>View on Google Maps</a>
        </div>
      </div>

      <div className='card-body'>
        <span className='card-date'>
          {props.startDate} - {props.endDate}
        </span>
        <p className='card-description'>{props.description}</p>
      </div>
    </div>

    <img
      src={`${props.imageUrl}`}
      alt={`${props.title}`}
      className='card-image'
    />
  </div>
);

export default Card;

import React from 'react';

const EventCard = ({ imgSrc, title, date, venue, contactName, contactNumber }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md ">
      <img src={imgSrc} alt={title} className="rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-2">{date}</p>
        <p className="text-gray-700 mb-2">{venue}</p>
        <p className="text-gray-700 mb-2">{contactName}</p>
        <p className="text-gray-700 mb-2">{contactNumber}</p>
        <button className="bg-custom-blue text-white px-4 py-2 p-4 w-full">Buy Tickets</button>
      </div>
    </div>
  );
};

export default EventCard;

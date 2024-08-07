import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import EventCard from '../EventCard/EventCard';
import MusicEvent from "../Music/assets/MusicEvent.png"

const Events = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <header className="w-full  text-white p-8" style={{backgroundColor:'#1827A4'}}>
        <div className="container mx-auto text-left">
          <h1 className="text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl mb-4">Discover your favorite entertainment right here</p>
          <div className="flex">
          <div className="relative" style={{ width: '600px' }}>
          <input
                type="text"
                className="pl-10 pr-4 py-2 w-full shadow-md outline-none"
              />
              <IoSearchSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-custom-blue" />
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Events</h2>
        <div className="flex justify-center space-x-4">
          <EventCard
            imgSrc={MusicEvent} 
            title="GOLDEN LEGENDS WITH SARITH & SURITH"
            date="Saturday, Jul 13 - 06:30 PM"
            venue="Nelum Pokuna Indoor Theater"
            contactName="Mr. Perera"
            contactNumber="077 8500222"
          />
          <EventCard
            imgSrc={MusicEvent}
            title="GOLDEN LEGENDS WITH SARITH & SURITH"
            date="Saturday, Jul 13 - 06:30 PM"
            venue="Nelum Pokuna Indoor Theater"
            contactName="Mr. Perera"
            contactNumber="077 8500222"
          />
          <EventCard
            imgSrc={MusicEvent}
            title="GOLDEN LEGENDS WITH SARITH & SURITH"
            date="Saturday, Jul 13 - 06:30 PM"
            venue="Nelum Pokuna Indoor Theater"
            contactName="Mr. Perera"
            contactNumber="077 8500222"
          />
        </div>
      </main>
    </div>
  );
};

export default Events;

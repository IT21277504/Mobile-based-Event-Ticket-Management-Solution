import React from "react";
import "./AllCategory.css";
import { useNavigate } from "react-router-dom";
import music from "./assets/music.png";
import dance from "./assets/dance.png";
import sport from "./assets/sport.png";
import festival from "./assets/festival.png";
import art from "./assets/art.png";
import education from "./assets/education.png";
import charity from "./assets/charity.png";
import exhibition from "./assets/exhibition.png";
import fitness from "./assets/fitness.png";
import fashion from "./assets/fashion.png";
import gaming from "./assets/gaming.png";
import auto from "./assets/auto.png";
import tech from "./assets/tech.png";
import kids from "./assets/kids.png";



const AllCategory = () => {
  
  const categories = [
    { name: "Music", imgSrc: music },
    { name: "Dance", imgSrc: dance },
    { name: "Sport", imgSrc: sport },
    { name: "Festival", imgSrc: festival },
    { name: "Art", imgSrc: art },
    { name: "Education", imgSrc: education },
    { name: "Charity", imgSrc: charity },
    { name: "Exhibition", imgSrc: exhibition },
    { name: "Fitness", imgSrc: fitness },
    { name: "Fashion", imgSrc: fashion },
    { name: "Gaming", imgSrc: gaming },
    { name: "Auto", imgSrc: auto },
    { name: "Tech", imgSrc: tech },
    { name: "Kids", imgSrc: kids },
  ];

  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/${categoryName.toLowerCase()}`);
  };

  return (
    <div className="app">
      <main className="main">
        <div className="banner">
          <h1>Let's Book Your Ticket</h1>
          <p>Discover your favorite entertainment right here</p>
        </div>
        <div className="categories">
          <h2>Categories</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <div
                key={category.name}
                className="category"
                role="button"
                tabIndex={0}
                onClick={() => handleCategoryClick(category.name)}
              >
                <img src={category.imgSrc} alt={category.name} />
                <p>{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllCategory;

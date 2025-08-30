import React from 'react';
import './RestaurantImage.css';

const RestaurantImage: React.FC = () => {
  return (
    <div className="restaurant-image-container">
      <div className="restaurant-image-placeholder">
        <div className="image-content">
          <div className="table-setup">
            <div className="table"></div>
            <div className="placemat"></div>
            <div className="plate"></div>
            <div className="fork"></div>
            <div className="knife"></div>
            <div className="wine-glass left"></div>
            <div className="wine-glass right"></div>
          </div>
          <div className="table-setup second">
            <div className="table"></div>
            <div className="placemat"></div>
            <div className="plate"></div>
            <div className="fork"></div>
            <div className="knife"></div>
            <div className="wine-glass left"></div>
            <div className="wine-glass right"></div>
          </div>
          <div className="table-setup third">
            <div className="table"></div>
            <div className="placemat"></div>
            <div className="plate"></div>
            <div className="fork"></div>
            <div className="knife"></div>
            <div className="wine-glass left"></div>
            <div className="wine-glass right"></div>
          </div>
        </div>
        <div className="image-overlay">
          <p className="image-description">Restaurant Interior</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantImage;

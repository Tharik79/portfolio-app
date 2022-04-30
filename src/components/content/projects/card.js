import React from "react";
import './card.css';

const Card = ({imageUrl, title, text}) => {
    return (
      <div className="card-container">
        <div className="image-container">
          <img src={imageUrl} alt="" className="img"/>
        </div>
        <div className="card-body">
        <div className="card-title">
        <a href="#" class="card-link">{title}</a>
          {/* <h2>{title}</h2> */}
        </div>
        <div className="card-text">
          <p>{text}</p>
        </div>
        </div>
      </div>
    );
};
export default Card;
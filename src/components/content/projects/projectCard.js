
import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="card-image">
        <img src={props.imageUrl} alt=""/>
      </div>

      <div>
        <div className="card-title">
          {props.title}
          <div className="card-link">
            <a className="card-link" href={props.link}>
              link
            </a>
            <a className="card-link" href={props.github}>
              
            <i class="devicon-github-original colored"></i>
          
              github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
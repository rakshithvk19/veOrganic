import React from "react";

export default function ProduceDetails() {
  return (
    <li className="produce-item">
      <img
        className="produce-image"
        alt="Produce Image"
        src="path_to_image.jpg"
      />
      <div className="produce-details">
        <h4 className="produce-title">title</h4>
        <button className="button">-</button>
        <div className="num-vegetables">number of vegetables</div>
        <button className="button">+</button>
      </div>
    </li>
  );
}

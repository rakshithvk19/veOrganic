import React, { useState } from "react";
import "./VendorList.css";
import ProduceList from "./ProduceList";

export default function VendorList() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="vendor">
      <div className="vendor__info">
        <img
          className="vendor__image"
          alt="Vendor Image"
          src="path_to_image.jpg"
        />
        <div className="vendor__details">
          <h2 className="vendor__name">Vendor name</h2>
          <div className="vendor__ratings">ratings</div>
          <div className="vendor__address">
            <img
              className="vendor__location-pin"
              alt="Location Pin"
              src="path_to_pin_image.jpg"
            />
            <address className="vendor__address-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus
            </address>
            <button
              className="vendor__dropdown-button"
              onClick={handleButtonClick}
            >
              V
            </button>
          </div>
        </div>
      </div>
      <div className="vendor__produce">
        {isExpanded ? <ProduceList /> : null}
      </div>
    </div>
  );
}

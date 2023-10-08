import React from "react";
import "./ProduceList.css";
import ProduceDetails from "./ProduceDetails";

export default function ProduceList() {
  return (
    <div className="produce-list">
      <ul className="list">
        <ProduceDetails />
        <ProduceDetails />
        <ProduceDetails />
      </ul>
    </div>
  );
}

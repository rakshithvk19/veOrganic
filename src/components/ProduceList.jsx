import React from "react";
import "./ProduceList.css";
import ProduceDetails from "./ProduceDetails";

export default function ProduceList() {
  return (
    <div className="produce-list">
      <ul className="list">
        <ProduceDetails img={"src/assets/basil.jpg"} title={"basil"} />
        <ProduceDetails img={"src/assets/lettuce.jpg"} title={"lettuce"} />
        <ProduceDetails img={"src/assets/tomato.jpg"} title={"tomato"} />
      </ul>
    </div>
  );
}

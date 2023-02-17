import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Nav from "./Nav";
const Card = () => {
  return (
    <div>
      <Nav />
      <div className="flex flex-row">
        <Card2 />

        <Card1 />
      </div>
    </div>
  );
};

export default Card;

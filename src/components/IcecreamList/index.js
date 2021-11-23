import React from "react";

import IcecreamCard from "./IcecreamCard";

const IcecreamList = ({ list }) => {
  return (
    <div>
      {list.map((item, i) => (
        <IcecreamCard key={i} item={item} i={i} />
      ))}
    </div>
  );
};

export default IcecreamList;

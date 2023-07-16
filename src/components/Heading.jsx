import React from "react";

const Heading = ({ title, type }) => {
  return (
    <div className={`capitalize py-2 text-${type} text-blue-900 font-semibold`}>
      {title}
    </div>
  );
};

export default Heading;

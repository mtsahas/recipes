import React from "react";

const CurrentDate = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <p className="date">{formattedDate}</p>;
};

export default CurrentDate;

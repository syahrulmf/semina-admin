import React from "react";

function THead({ text }) {
  return (
    <thead className="thead-dark">
      <tr>
        {text.map((text, index) => {
          return <th key={index}>{text}</th>;
        })}
      </tr>
    </thead>
  );
}

export default THead;

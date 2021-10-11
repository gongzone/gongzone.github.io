import React from "react";

const Paragraph = ({ children }) => {
  return (
    <p
      style={{
        fontSize: "1.7rem",
        lineHeight: "1.7",
      }}
    >
      {children}
    </p>
  );
};

export default Paragraph;

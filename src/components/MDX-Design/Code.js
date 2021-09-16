import React from "react";
const Code = ({ children }) => {
  return (
    <code
      style={{
        background: "hsl(206, 33%, 96%)",
        color: "hsl(210, 22%, 40%)",
        padding: "1rem",
        borderRadius: "0.25rem",
      }}
    >
      {children}
    </code>
  );
};

export default Code;

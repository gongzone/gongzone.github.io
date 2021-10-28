import React from "react";

const Code = ({ children }) => {
  return (
    <code
      style={{
        fontFamily: "Fira Code, imprima, arial, monospace",
        background: "#efe9cf",
        padding: "0.2rem",
        borderRadius: "0.5rem",
      }}
    >
      {children}
    </code>
  );
};

export default Code;

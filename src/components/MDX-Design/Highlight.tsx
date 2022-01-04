import React from "react";

const HL: React.FC<{ children: string }> = ({ children }) => {
  return (
    <code
      style={{
        fontFamily: "IBM Plex Sans KR, Noto Sans,  arial, ans-serif",
        fontWeight: "bold",
        color: "white",
        background: "#e94e4e",
        padding: "0.15rem 0.35rem",
        borderRadius: "0.5rem",
      }}
    >
      {children}
    </code>
  );
};

export default HL;

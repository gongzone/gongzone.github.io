import React from "react";
import styled from "styled-components";

const Backdrop = (props) => {
  return (
    <Wrapper
      isOpen={props.isOpen}
      role="button"
      onClick={props.onClick}
      onKeyDown={props.onClick}
      transition={props.transition}
    ></Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 888;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  background: ${(props) =>
    props.isOpen ? "rgba(0, 0, 0, 29%)" : "rgba(0, 0, 0, 0%)"};
  transition: ${(props) =>
    props.transition === "on" ? "all 0.8s ease" : "unset"};
`;

export default Backdrop;

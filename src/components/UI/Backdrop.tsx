import React from "react";
import styled from "styled-components";

interface BackdropProps {
  isOpen: boolean;
  transition?: string;
  offModal: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({
  isOpen,
  transition,
  offModal,
}) => {
  return (
    <Wrapper
      isOpen={isOpen}
      role="button"
      onClick={offModal}
      onKeyDown={offModal}
      transition={transition}
    ></Wrapper>
  );
};

const Wrapper = styled.div<{ isOpen: boolean; transition?: string }>`
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

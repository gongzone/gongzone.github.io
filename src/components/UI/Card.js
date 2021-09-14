import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <Wrapper
      width={props.w}
      height={props.h}
      background={props.background}
      border={props.border}
      borderRadius={props.borderRadius}
      boxShadow={props.boxShadow}
    >
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background || "transparent"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "0"};
  box-shadow: ${(props) =>
    props.boxShadow && "0 0.4rem 0.4rem rgba(0, 0, 0, 25%)"};
`;

export default Card;

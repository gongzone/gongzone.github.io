import React from "react";
import styled from "styled-components";

const RoundedBox = ({ children, flex }) => {
  return <Wrapper flex={flex}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 46rem;
  justify-content: ${(props) => (props.flex ? "space-between" : "none")};
  align-items: ${(props) => (props.flex ? "center" : "none")};
  margin-bottom: ${(props) => (props.flex ? "2.5rem" : "0")};
  width: 83.3%;
  height: 4.8rem;
  background: white;
  border: 0.2rem solid #e25050;
  border-radius: 1rem;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 25%);
`;

export default RoundedBox;

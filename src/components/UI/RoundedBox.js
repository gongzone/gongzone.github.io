import React from "react";
import styled from "styled-components";

const RoundedBox = ({ children, marginBottom }) => {
  return <Wrapper marginBottom={marginBottom}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
  max-width: 46rem;
  width: 83.3%;
  height: 4.8rem;
  background: white;
  border: 0.2rem solid #e25050;
  border-radius: 1rem;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 25%);

  @media screen and (min-width: 2000px) {
    max-width: 55rem;
    height: 6rem;
    margin-bottom: ${(props) => (props.marginBottom ? "3rem" : "0")};
  }
`;

export default RoundedBox;

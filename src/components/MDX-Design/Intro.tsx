import React from "react";
import styled from "styled-components";
import { GiPaintRoller } from "react-icons/gi";

const Intro: React.FC<{ children: string }> = ({ children }) => {
  return (
    <Wrapper>
      <GiPaintRoller className="icon" />
      <p className="paragraph">{children}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-style: italic;
  font-weight: bold;
  line-height: 1.8;
  word-spacing: 3px;
  font-size: 1.7rem;
  line-height: 1.7;
  letter-spacing: 0.05rem;
  margin: 2rem 0;
  background: #fff5dd;
  padding: 2rem;
  border-radius: 0.5rem;

  .paragraph {
    margin: 0;
  }

  .icon {
    display: none;
  }

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    .icon {
      display: block;
      font-size: 7rem;
    }
  }
`;

export default Intro;

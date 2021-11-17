import React from "react";
import { FiInfo } from "react-icons/fi";
import { TiWarningOutline } from "react-icons/ti";
import { GoQuote } from "react-icons/go";
import styled from "styled-components";

const DecoDiv = ({ children, display }) => {
  if (display === "warning")
    return (
      <Wrapper>
        <div className="container warning">
          <TiWarningOutline className="icon" />
          {children}
        </div>
      </Wrapper>
    );
  if (display === "info")
    return (
      <Wrapper>
        <div className="container info">
          <FiInfo className="icon" />
          {children}
        </div>
      </Wrapper>
    );
  if (display === "default") {
    return (
      <Wrapper>
        <div className="container">{children}</div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div className="quote">
          <GoQuote className="quote-icon" />
          {children}
        </div>
      </Wrapper>
    );
  }
};
const Wrapper = styled.div`
  .container {
    padding: 2rem 1.5rem;
    background: #282c35;
    font-weight: bold;
    color: whitesmoke;
    border-radius: 0.5rem;
    border-left: 5px solid gray;
    position: relative;
    margin: 2rem 0;
    font-size: 1.7rem;
    line-height: 1.7;
    letter-spacing: 0.05rem;
  }
  @media (min-width: 1170px) {
    .container {
      margin-left: -2rem;
      margin-right: -2rem;
    }
  }
  .icon {
    position: absolute;
    top: 0;
    left: -3px;
    background: var(--clr-white);
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 6px solid var(--clr-white);
  }
  .info {
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    border-color: var(--clr-primary-5);
    .icon {
      color: var(--clr-primary-5);
    }
  }
  .warning {
    background: #fffaeb;
    color: #513c06;
    border-color: #f7d070;
    .icon {
      color: #f7d070;
    }
  }
  .quote {
    @media (min-width: 576px) {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
    font-style: italic;
    color: var(--clr-grey-5);
    line-height: 1.8;
    word-spacing: 3px;
    font-size: 1.2rem;
    margin: 2rem 0;
    .quote-icon {
      font-size: 6rem;
      color: var(--clr-primary-5);
    }
  }
`;
export default DecoDiv;

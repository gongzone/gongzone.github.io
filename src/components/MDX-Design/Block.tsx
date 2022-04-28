import React, { ReactNode } from 'react';
import { FiInfo } from 'react-icons/fi';
import { TiWarningOutline } from 'react-icons/ti';
import { GoQuote } from 'react-icons/go';
import styled from 'styled-components';

const Block: React.FC<{ children: ReactNode; display?: string }> = ({ children, display }) => {
  return (
    <Wrapper>
      <div
        className={`${display === 'quote' ? 'quote' : 'container'} ${
          display === 'warning' ? 'warning' : display === 'info' ? 'info' : ''
        }`}
      >
        {display === 'warning' && <TiWarningOutline className="icon" />}
        {display === 'info' && <FiInfo className="icon" />}
        {display === 'quote' && <GoQuote className="quote-icon" />}
        {children}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  p {
    margin: 1rem 0;
  }

  .container {
    padding: 2rem 1.5rem;
    background: #f8f8f8;
    border-radius: 0.5rem;
    border-left: 5px solid #d4d4d4;
    position: relative;
    margin: 2rem 0 2rem 0;
    font-size: 1.625rem;
    line-height: 1.7;
    letter-spacing: 0.05rem;
  }

  .icon {
    position: absolute;
    top: 0;
    left: -3px;
    background: white;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 6px solid white;
  }
  .info {
    background: #eafaf3;
    border-color: #84ccad;
    .icon {
      color: #84ccad;
    }
  }
  .warning {
    background: #fffaeb;
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
    line-height: 1.8;
    word-spacing: 3px;
    font-size: 1.7rem;
    font-weight: bold;
    margin: 2rem 0;
    .quote-icon {
      font-size: 6rem;
    }
  }

  @media (min-width: 1920px) {
    font-size: 1.76rem;
  }
`;
export default Block;

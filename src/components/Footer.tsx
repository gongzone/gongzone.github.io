import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <Wrapper>
      <div className="logo-container">
        <a href="https://github.com/GongZone">
          <AiFillGithub className="logo" />
        </a>
        <a href="mailto:dnjsqhwo@gmail.com">
          <IoIosMail className="logo" />
        </a>
      </div>

      <div className="footer-box">
        <span className="footer-description"></span>
        <span className="footer-description">
          Made by GongZone with Gatsby &copy; 2022
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 17rem;
  background: #304146;

  .footer-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0.5rem;
    border-radius: 0.7rem;
  }

  .footer-description {
    color: white;
    font-family: imprima;
  }

  .logo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 7rem;
  }
  .logo {
    font-size: 3rem;
    color: #e25050;
  }
  .bottom {
    background: #6f9196;
    width: 100%;
    height: 5rem;
  }

  @media screen and (min-width: 768px) {
  }
`;

export default Footer;

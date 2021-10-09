import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { IoIosMenu } from "react-icons/io";
import logo from "../assets/images/logo.svg";

const Header = ({ onSidebar }) => {
  return (
    <Wrapper>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <button className="hamburger-menu" onClick={onSidebar}>
        <IoIosMenu />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7rem;
  background-color: #fff5dd;
  z-index: 77;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 35%);

  .logo {
    margin-left: 2rem;
  }

  .hamburger-menu {
    border: 0rem;
    padding: 0.6rem;
    margin-right: 1.5rem;
    font-size: 3.2rem;
    color: #606060;
    background: transparent;
    cursor: pointer;
  }
  @media (prefers-color-scheme: dark) {
    & {
      background-color: #00564d;
    }
  }
`;
export default Header;

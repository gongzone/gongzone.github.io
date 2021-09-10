import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { IoIosMenu } from "react-icons/io";
import logo from "../assets/images/logo.svg";

const Header = ({ controlSidebar }) => {
  return (
    <Wrapper>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <button className="hamburger-menu" onClick={controlSidebar}>
        <IoIosMenu />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7rem;
  background-color: #fff5dd;
  filter: drop-shadow(0 0.2rem 0.5rem rgba(0, 0, 0, 25%));

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
`;
export default Header;

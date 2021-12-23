import React from "react";
import { Link } from "gatsby";
import { FaTimes, FaCommentDots, FaHouseDamage } from "react-icons/fa";
import styled from "styled-components";
import Backdrop from "./UI/Backdrop";

interface SidebarProps {
  isOpen: boolean;
  offSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <>
      <Backdrop
        isOpen={props.isOpen}
        onClick={props.offSidebar}
        transition="on"
      />
      <Wrapper isOpen={props.isOpen}>
        <button className="close-button" onClick={props.offSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          <ul>
            <li>
              <Link to="/" onClick={props.offSidebar}>
                <FaHouseDamage />
                <span className="link-text">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={props.offSidebar}>
                <FaCommentDots />
                <span className="link-text">About</span>
              </Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 27rem;
  background-color: #fff5dd;
  z-index: 999;
  visibility: ${(props: { isOpen: boolean }) =>
    props.isOpen ? "visible" : "hidden"};
  transition: all 0.8s ease;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  box-shadow: -0.3rem 0 0.4rem rgba(0, 0, 0, 25%);

  .close-button {
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    border: 0rem;
    padding: 0.6rem;
    font-size: 3.2rem;
    color: #e25050;
    background: transparent;
    cursor: pointer;
  }

  .sidebar-links {
    position: relative;
    top: 7rem;
    border-top: 0.15rem solid rgba(0, 0, 0, 15%);
  }

  .sidebar-links ul {
    margin: 0;
    padding-top: 1.3rem;
    padding-left: 1.6rem;
  }

  .sidebar-links li {
    margin-bottom: 1rem;
    font-size: 2.4rem;
  }

  .sidebar-links li a {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem;
  }

  .link-text {
    padding-left: 0.75rem;
    font-size: 3rem;
    font-family: imprima, arial, sans-serif;
  }
`;

export default Sidebar;

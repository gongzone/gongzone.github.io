import React from "react";
import styled from "styled-components";
import { BsTriangleFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

interface SelectButton {
  tag?: string;
  onModal: () => void;
  icon: string;
}

const SelectorButton: React.FC<SelectButton> = ({ tag, onModal, icon }) => {
  return (
    <Wrapper icon={icon}>
      <button className="button" type="button" onClick={onModal}>
        {tag && <span className="content">Tag: {tag}</span>}
        {!tag && <span className="content">Search</span>}
        {icon === "triangle" && <BsTriangleFill className="icon" />}
        {icon === "search" && <FaSearch className="icon" />}
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: ${(props: { icon: string }) =>
    props.icon === "search" ? "2.5rem" : "0"};
  max-width: 46rem;
  width: 83.3%;
  height: 4.8rem;
  background: white;
  border: 0.2rem solid #e25050;
  border-radius: 1rem;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 25%);

  .button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background: transparent;
    -webkit-tap-highlight-color: transparent;
    z-index: 99;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .button:focus {
    outline: none;
  }

  .content {
    font-family: imprima, arial, sans-serif;
    margin-left: 2rem;
  }

  .icon {
    transform: ${(props) =>
      props.icon === "search" ? "none" : "rotate(180deg)"};
    color: #d83232;
    margin-right: 2rem;
  }

  @media screen and (min-width: 2000px) {
    max-width: 55rem;
    height: 6rem;
    margin-bottom: ${(props) => (props.icon === "search" ? "3rem" : "0")};
  }
`;

export default SelectorButton;

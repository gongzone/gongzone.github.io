import React from "react";
import { BsCaretRightFill } from "react-icons/bs";
import { Link } from "gatsby";
import styled from "styled-components";

const SelectorModal = (props) => {
  const {
    title,
    selected,
    onClickHandler,
    ulRef,
    onScrollHandler,
    allLists,
    isSelected,
    liRefs,
  } = props;

  return (
    <Wrapper>
      <div className="modal-header">
        <span className="header-title1">Select {title}</span>
        <Link to={`/${selected}`}>
          <span className="header-title2" onClick={onClickHandler}>
            선택
          </span>
        </Link>
      </div>
      <BsCaretRightFill className="selector" />
      <div className="modal-main">
        <ul className="tags" ref={ulRef} onScroll={onScrollHandler}>
          {allLists.map((el, index) => {
            return (
              <li
                className={`tag ${isSelected[index] && "active"}`}
                key={index}
                ref={liRefs[index]}
              >
                {el}
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 88;
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  max-width: 52.5rem;
  max-height: 45rem;
  width: 90vw;
  height: 41vh;
  box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 25%);

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 23%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background: #fff5dd;
  }
  .header-title1 {
    font-weight: bold;
    margin-left: 2rem;
  }
  .header-title2 {
    border-radius: 0.5rem;
    background: #44b4cc;
    color: white;
    margin-right: 2rem;
    padding: 1rem 2rem;
  }
  .selector {
    position: absolute;
    z-index: 30;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
    font-size: 2.5rem;
    color: rgba(216, 50, 50, 63%);
  }

  .modal-main {
    position: relative;
    height: 77%;
  }

  .tags {
    background: #fcfcfc;
    scroll-snap-type: x mandatory;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    margin: 0;
  }
  .tag {
    color: #3d3d3d;
    font-weight: bold;
    transition: all 0.8s ease;
    scroll-snap-align: center;
    padding: 1rem;
    font-size: 2rem;
    border-radius: 0.7rem;
    background: #f2f2f2;
    margin-right: 2rem;
  }

  .active {
    color: #2a90ef;
    transition: all 0.8s ease;
  }

  .tag:first-child {
    margin-left: 46%;
  }
  .tag:last-child {
    margin-right: 45%;
  }
`;

export default SelectorModal;

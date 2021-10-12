import React, { useState } from "react";
import { BsTriangleFill } from "react-icons/bs";
import styled from "styled-components";
import TagModal from "./TagModal";
import RoundedBox from "./UI/RoundedBox";
import { FaSearch } from "react-icons/fa";

const Navigation = ({ tag }) => {
  const [showModal, setShowModal] = useState(false);

  const onModal = () => {
    setShowModal(true);
  };

  const offModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <TagModal onModal={onModal} offModal={offModal} tag={tag} />
      )}
      <Wrapper>
        <div className="title-container">
          <span className="title">GongZone DevBlog</span>
          <div className="highlight"></div>
        </div>
        <RoundedBox>
          <button className="tag-selector" type="button" onClick={onModal}>
            <span className="current-tag">Tag: {tag}</span>
            <BsTriangleFill className="triangle-down" />
          </button>
        </RoundedBox>
        <RoundedBox marginBottom="2.5rem">
          <label htmlFor="search" className="searchLabel">
            <input
              className="searchbar"
              type="text"
              placeholder="Search..."
              name="search"
              id="search"
            />
            <div className="search-icon">
              <FaSearch />
            </div>
          </label>
        </RoundedBox>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20rem;
  font-size: 1.9rem;
  margin-top: 1.5rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 15%);

  .title-container {
    position: relative;
    display: flex;
    justify-content: center;
  }
  .title {
    font-family: "Carrois Gothic SC", arial, sans-serif;
    font-size: 3rem;
    color: white;
    text-shadow: 0 0 2px #cc7474, 0 0 2px #cc7474, 0 0 2px #cc7474,
      0 0 2px #cc7474, 0 0 2px #cc7474, 0 0 2px #cc7474, 0 0 2px #cc7474,
      0 0 2px #cc7474, 0 0 2px #cc7474, 0 0 2px #cc7474, 0 0 2px #cc7474,
      0 0 2px #cc7474, 0 0 2px #cc7474, 0 0 2px #cc7474, 0 0 2px #cc7474,
      0 0 2px #cc7474;
  }

  .highlight {
    position: absolute;
    top: 63%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 29.5rem;
    height: 1.9rem;
    background: rgba(135, 88, 157, 20%);
  }
  .searchLabel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
    max-width: 46rem;
    width: 83.3vw;
    height: 5rem;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
  }

  .tag-selector {
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

  .tag-selector:focus {
    outline: none;
  }

  .current-tag {
    font-family: imprima, arial, sans-serif;
    margin-left: 2rem;
  }

  .triangle-down {
    transform: rotate(180deg);
    color: #d83232;
    margin-right: 2rem;
  }

  .searchbar {
    position: relative;
    width: 100%;
    height: 100%;
    font-family: imprima, arial, sans-serif;
    padding-left: 2rem;
    outline: none;
    border: none;
    cursor: pointer;
  }
  .search-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    margin-right: 2.5rem;
    height: 100%;
    font-size: 2rem;
    color: #d83232;
  }
`;

export default Navigation;

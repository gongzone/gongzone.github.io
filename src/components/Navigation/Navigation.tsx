import React, { useState } from "react";
import styled from "styled-components";
import TagModal from "./TagModal";
import SearchModal from "./SearchModal";
import SelectorButton from "../UI/SelectorButton";

const Navigation: React.FC<{ tag: string }> = ({ tag }) => {
  const [tagShowModal, setTagShowModal] = useState(false);
  const [searchShowModal, setSearchShowModal] = useState(false);

  const tagShowModalHandler = () => {
    setTagShowModal(!tagShowModal);
  };

  const searchShowModalHandler = () => {
    setSearchShowModal(!searchShowModal);
  };

  return (
    <Wrapper>
      <div className="title-container">
        <span className="title">GongZone DevBlog</span>
        <div className="highlight"></div>
      </div>
      {tagShowModal && (
        <TagModal showModal={tagShowModal} offModal={tagShowModalHandler} />
      )}
      {/*{searchShowModal && <SearchModal />}*/}
      <SelectorButton
        tag={tag}
        icon="triangle"
        onClick={tagShowModalHandler}
      ></SelectorButton>
      <SelectorButton
        icon="search"
        onClick={searchShowModalHandler}
      ></SelectorButton>
    </Wrapper>
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
`;

export default Navigation;

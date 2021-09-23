import React, { useState } from "react";
import { BsTriangleFill } from "react-icons/bs";
import styled from "styled-components";
import TagModal from "./TagModal";

const TagSelector = ({ tag }) => {
  const [showModal, setShowModal] = useState(false);

  const clickHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && <TagModal onClick={clickHandler} tag={tag} />}
      <Wrapper>
        <button className="selector-box" onClick={clickHandler}>
          <span className="current-tag">Tag: {tag}</span>
          <BsTriangleFill className="triangle-down" />
        </button>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  font-size: 1.9rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 15%);

  .selector-box {
    width: 83.3%;
    height: 4.8rem;
    display: flex;
    background: transparent;
    justify-content: space-between;
    align-items: center;
    border: 0.2rem solid #e25050;
    border-radius: 1rem;
    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 25%);
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
`;

export default TagSelector;

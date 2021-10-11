import React, { useState, useEffect, useRef } from "react";
import { BsCaretRightFill, BsExclamationSquareFill } from "react-icons/bs";
import { Link } from "gatsby";
import styled from "styled-components";

const setUrl = (chosenList, title, tag) => {
  let url = "";

  if (title === "Tag") {
    return (url = chosenList === "ALL" ? "" : chosenList);
  }

  if (title === "Page") {
    if (chosenList === 1) {
      return (url = tag ? `${tag}` : "");
    }
    return (url = tag ? `${tag}/${chosenList}` : `${chosenList}`);
  }
};

const SelectorModalPC = (props) => {
  const { title, lists, offModal, tag } = props;
  const [selectedList, setSelectedList] = useState(false);
  let selectedUrl = setUrl(selectedList, title, tag);

  //외부 스크롤 불가능하게 만들기
  useEffect(() => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    document.body.style.position = "fixed";
    document.body.style["overflow-y"] = "scroll";
    document.body.style.top = `${-top}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "unset";
      document.body.style["overflow-y"] = "unset";
      document.documentElement.scrollTop = top;
    };
  }, []);

  const onClickHandler = (list) => {
    setSelectedList(list);
  };

  return (
    <Wrapper>
      <div className="modal-header">
        <span className="header-info">Select {title}</span>
        <div className="header-buttons">
          {selectedList && (
            <Link className="select-link" to={`/${selectedUrl}`}></Link>
          )}
          <button className="header-button select" onClick={offModal}>
            선택
          </button>

          <button className="header-button" onClick={offModal}>
            취소
          </button>
        </div>
      </div>

      <div className="modal-main">
        <ul className="main-lists">
          {lists.map((el, index) => {
            return (
              <li
                className={`main-list ${selectedList === el ? "active" : ""}`}
                key={index}
                onClick={() => {
                  selectedList !== el
                    ? onClickHandler(el)
                    : onClickHandler(false);
                }}
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
  background: #fcfcfc;
  z-index: 777;
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  max-width: 48rem;
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
  .header-info {
    font-weight: bold;
    margin-left: 2rem;
  }

  .header-buttons {
    display: flex;
  }

  .header-button {
    border-radius: 0.5rem;
    background: #44b4cc;
    color: white;
    margin-right: 2rem;
    padding: 1rem 2rem;
  }

  .header-button.select {
    background: #44b4cc;
    transition: background 0.8s ease;
  }

  .select-link {
    display: flex;
    z-index: 99;
    position: absolute;
    width: 7rem;
    height: 3.9rem;
  }

  .modal-main {
    position: relative;
    height: 77%;
  }

  .main-lists {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
  }

  .main-list {
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
    color: #3d3d3d;
    font-weight: bold;
    font-size: 2rem;
    background: #fcfcfc;
    transition: all 0.5s ease;
  }

  .main-list:hover {
    background: #d9edf7;
    transition: all 0.5s ease;
  }

  .active {
    background: #d9edf7;
  }
`;

export default SelectorModalPC;

import React, { useState, useEffect, useRef } from "react";
import { BsCaretRightFill } from "react-icons/bs";
import { Link } from "gatsby";
import styled from "styled-components";
import { useDebouncedCallback } from "use-debounce";

const SelectorModal = (props) => {
  const { title, lists, offModal, tag } = props;

  const initialSelected = lists.map((list, index) => {
    if (index === 0) {
      return true;
    } else {
      return false;
    }
  });

  const [isSelected, setIsSelected] = useState(initialSelected);
  const [selectedList, setSelectedList] = useState("");
  const [marginLeft, setMarginLeft] = useState(0);
  const [marginRight, setMarginRight] = useState(0);
  const [resizeScale, setResizeScale] = useState({ x: 0, y: 0 });

  const ulRef = useRef(null);
  const liRefs = Array.from({ length: lists.length }, () => React.createRef());

  const resizeHandler = useDebouncedCallback(() => {
    setResizeScale({ x: window.innerWidth, y: window.innerHeight });
  }, 200);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  //first li와 last li를 위한 margin 크기 계산(반응형을 위해)
  useEffect(() => {
    const margin_L =
      ulRef.current.offsetWidth / 2 - liRefs[0].current.offsetWidth / 2;
    const margin_R =
      ulRef.current.offsetWidth / 2 -
      liRefs[liRefs.length - 1].current.offsetWidth / 2;

    setMarginLeft(margin_L);
    setMarginRight(margin_R);
  }, [resizeScale]);

  //현재 선택되어 있는 상태에 따라 해당 li가 가운데 오도록 위치 조정
  // useEffect(() => {
  //   const selectedListIndex = lists.indexOf(currentState);
  //   const firstListPosition =
  //     liRefs[0].current.offsetLeft + liRefs[0].current.offsetWidth / 2;

  //   if (selectedListIndex !== 0) {
  //     const selectedListPosition =
  //       liRefs[selectedListIndex].current.offsetLeft +
  //       liRefs[selectedListIndex].current.offsetWidth / 2;

  //     console.log(selectedListPosition - firstListPosition);
  //     ulRef.current.scrollLeft = selectedListPosition - firstListPosition;
  //     console.log(ulRef.current.scrollLeft);
  //   }
  // }, []);

  //선택된 li에 따라 해당 path로 변환 후 스테이트 업데이트
  useEffect(() => {
    const selectedIndex = isSelected.indexOf(true);
    let chosenList = lists[selectedIndex];
    let url = "";

    if (title === "Tag") {
      url = chosenList === "ALL" ? "" : chosenList;
    }
    if (title === "Page") {
      url = tag ? `${tag}/${chosenList}` : `${chosenList}`;

      if (chosenList === 1) {
        url = tag ? `${tag}` : "";
      }
    }
    setSelectedList(url);
  }, [isSelected]);

  //스크롤 시 어떤 li가 선택되었는지를 찾는 이벤트 핸들러
  const onScrollHandler = () => {
    const selectorPosition = ulRef.current.offsetWidth / 2;
    const selectedArray = [];
    let isSameArray = true;

    for (let i = 0; i < lists.length; i++) {
      const listCenterPosition =
        liRefs[i].current.offsetLeft +
        liRefs[i].current.offsetWidth / 2 -
        ulRef.current.scrollLeft;

      selectedArray[i] =
        liRefs[i].current.offsetWidth / 2 >=
        Math.abs(listCenterPosition - selectorPosition);
    }

    for (let i = 0; i < lists.length; i++) {
      const isSameList = selectedArray[i] === isSelected[i];
      if (isSameList) {
        continue;
      } else {
        isSameArray = false;
        break;
      }
    }

    if (!isSameArray) {
      setIsSelected(selectedArray);
    }
  };

  const alert = () => {
    console.log("태그를 선택해주세요");
  };

  return (
    <Wrapper
      marginLeft={marginLeft}
      marginRight={marginRight}
      isSelected={isSelected}
    >
      <div className="modal-header">
        <span className="header-title1">Select {title}</span>
        <div className="header-buttons">
          <div className="select">
            {isSelected.indexOf(true) !== -1 && (
              <Link className="select-link" to={`/${selectedList}`}></Link>
            )}
            <button
              className="header-title2 select"
              onClick={isSelected.indexOf(true) !== -1 ? offModal : alert}
            >
              선택
            </button>
          </div>
          <button className="header-title2" onClick={offModal}>
            취소
          </button>
        </div>
      </div>

      <div className="modal-main">
        <ul className="tags" ref={ulRef} onScroll={onScrollHandler}>
          {lists.map((el, index) => {
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
      <BsCaretRightFill className="selector" />
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
  .header-title1 {
    font-weight: bold;
    margin-left: 2rem;
  }

  .header-buttons {
    display: flex;
  }

  .select {
    position: relative;
  }

  .select-link {
    display: flex;
    z-index: 99;
    position: absolute;
    width: 7rem;
    height: 3.9rem;
  }

  .header-title2 {
    border-radius: 0.5rem;
    background: #44b4cc;
    color: white;
    margin-right: 2rem;
    padding: 1rem 2rem;
  }

  .header-title2.select {
    background: ${(props) =>
      props.isSelected.indexOf(true) !== -1
        ? "#44b4cc"
        : "rgba(216,50,50,63%)"};
    transition: background 0.8s ease;
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
    display: flex;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    align-items: center;
    margin: 0;
  }

  .tag {
    position: relative;
    color: #3d3d3d;
    font-weight: bold;
    transition: all 0.8s ease;
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
    margin-left: ${(props) =>
      props.marginLeft !== 0 ? `${props.marginLeft}px` : "50%"};
  }

  .tag:last-child:after {
    position: absolute;
    padding-left: 1rem;
    padding-right: ${(props) => (props.marginRight !== 0 ? `0` : "50%")};
    width: ${(props) =>
      props.marginRight !== 0 ? `${props.marginRight}px` : "0"};
    height: 100%;
    content: "";
  }
`;

export default SelectorModal;

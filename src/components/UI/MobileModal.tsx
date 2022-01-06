import React, { useState, useEffect, useRef } from "react";
import { BsCaretRightFill } from "react-icons/bs";
import { Link } from "gatsby";
import styled from "styled-components";
import { useDebouncedCallback } from "use-debounce";

interface MobileModalProps {
  usedFor: string;
  lists: { name: string | number; slug: string | number }[];
  offModal: () => void;
  tag?: string | null;
}

const MobileModal: React.FC<MobileModalProps> = ({
  usedFor,
  lists,
  offModal,
  tag,
}) => {
  const initialSelected = lists.map((__, index) => {
    return index === 0 ? true : false;
  });

  const [isSelected, setIsSelected] = useState(initialSelected);
  const [selectedPath, setSelectedPath] = useState<string | number>("");
  const [marginLeft, setMarginLeft] = useState(0);
  const [marginRight, setMarginRight] = useState(0);
  const [resizeScale, setResizeScale] = useState({ x: 0, y: 0 });

  const ulRef = useRef<HTMLUListElement>(null);
  const liRefs = Array.from({ length: lists.length }, () =>
    React.createRef<HTMLLIElement>()
  );

  // component mount 시 resize 리스너 적용
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  //first li와 last li를 위한 margin 크기 계산(반응형을 위해)
  useEffect(() => {
    const margin_L =
      ulRef.current!.offsetWidth / 2 - liRefs[0].current!.offsetWidth / 2;
    const margin_R =
      ulRef.current!.offsetWidth / 2 -
      liRefs[liRefs.length - 1].current!.offsetWidth / 2;

    setMarginLeft(margin_L);
    setMarginRight(margin_R);
  }, [resizeScale]);

  //선택된 li에 따라 해당 path로 변환 후 스테이트 업데이트
  useEffect(() => {
    const selectedIndex = isSelected.indexOf(true);

    if (selectedIndex === -1) {
      return;
    }

    let chosenList = lists[selectedIndex].slug;
    let path: string | number = "";

    if (usedFor === "Tag") {
      path = chosenList;
    }

    if (usedFor === "Page") {
      path = tag ? `${tag}/${chosenList}` : `${chosenList}`;

      if (chosenList === 1) {
        path = tag ? `${tag}` : "";
      }
    }
    setSelectedPath(path);
  }, [isSelected]);

  //스크롤 시 어떤 li가 선택되었는지를 찾는 이벤트 핸들러
  const onScrollHandler = () => {
    const selectorPosition = ulRef.current!.offsetWidth / 2;

    for (let i = 0; i < lists.length; i++) {
      const listCenterPosition =
        liRefs[i].current!.offsetLeft +
        liRefs[i].current!.offsetWidth / 2 -
        ulRef.current!.scrollLeft;

      const selected =
        liRefs[i].current!.offsetWidth / 2 >=
        Math.abs(listCenterPosition - selectorPosition);

      if (selected === true && isSelected[i] === true) {
        return;
      }

      if (selected === true && isSelected[i] === false) {
        setIsSelected((prevState) => {
          const newState = prevState.map((__, index) => {
            return index === i ? true : false;
          });
          return newState;
        });
      }
    }
  };

  // resize 시 scale 측정(Debounce 적용)
  const resizeHandler = useDebouncedCallback(() => {
    setResizeScale({ x: window.innerWidth, y: window.innerHeight });
  }, 200);

  return (
    <Wrapper marginLeft={marginLeft} marginRight={marginRight}>
      <div className="modal-header">
        <span className="header-info">Select {usedFor}</span>
        <div className="header-buttons">
          <div className="select">
            <Link className="select-link" to={`/${selectedPath}`}>
              <button className="header-button" onClick={offModal}>
                선택
              </button>
            </Link>
          </div>
          <button className="header-button" onClick={offModal}>
            취소
          </button>
        </div>
      </div>

      <div className="modal-main">
        <ul className="main-lists" ref={ulRef} onScroll={onScrollHandler}>
          {lists.map((element, index) => {
            return (
              <li
                className={`main-list ${isSelected[index] && "active"}`}
                key={index}
                ref={liRefs[index]}
              >
                {element.name}
              </li>
            );
          })}
        </ul>
      </div>
      <BsCaretRightFill className="selector" />
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  marginLeft: number;
  marginRight: number;
}>`
  position: fixed;
  top: 50%;
  left: 50%;
  background: #fcfcfc;
  z-index: 889;
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
    height: 6.5rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background: #fff5dd;
    font-size: 1.6rem;
  }
  .header-info {
    font-weight: bold;
    margin-left: 2rem;
  }

  .header-buttons {
    display: flex;
  }

  .select-link {
    display: flex;
    z-index: 99;
    width: 100%;
    height: 100%;
  }

  .header-button {
    border-radius: 0.5rem;
    background: #44b4cc;
    color: white;
    margin-right: 2rem;
    padding: 1rem 2rem;
  }

  .modal-main {
    position: relative;
    height: 77%;
  }

  .main-lists {
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

  .main-list {
    position: relative;
    color: #3d3d3d;
    font-weight: bold;
    transition: all 0.8s ease;
    padding: 1rem;
    font-size: 2rem;
    border-radius: 0.7rem;
    background: #f2f2f2;
    margin-right: 2rem;
    white-space: nowrap;
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

  .active {
    color: #2a90ef;
    transition: all 0.8s ease;
  }

  .main-list:first-child {
    margin-left: ${(props) =>
      props.marginLeft !== 0 ? `${props.marginLeft}px` : "50%"};
  }

  .main-list:last-child:after {
    position: absolute;
    padding-left: 1rem;
    padding-right: ${(props) => (props.marginRight !== 0 ? `0` : "50%")};
    width: ${(props) =>
      props.marginRight !== 0 ? `${props.marginRight}px` : "0"};
    height: 100%;
    content: "";
  }
`;

export default MobileModal;

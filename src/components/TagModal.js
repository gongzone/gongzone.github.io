import React, { useRef, useState, useEffect } from "react";
import { Link } from "gatsby";
import { BsCaretRightFill } from "react-icons/bs";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___tags)
    }
  }
`;

const TagModal = ({ onClick }) => {
  const {
    allMdx: { distinct: tags },
  } = useStaticQuery(query);

  const [isSelected, setIsSelected] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    const selectedIndex = isSelected.indexOf(true);
    setSelectedTag(tags[selectedIndex - 1] || "");
  }, [isSelected]);

  const ulRef = useRef(null);
  const liRefs = Array.from({ length: tags.length + 1 }, () =>
    React.createRef()
  );

  const onScrollHandler = () => {
    const selectorPosition = ulRef.current.offsetWidth / 2;
    const selectedArray = [];

    for (let i = 0; i <= tags.length; i++) {
      const ElementCenter =
        liRefs[i].current.offsetLeft +
        liRefs[i].current.offsetWidth / 2 -
        ulRef.current.scrollLeft;

      selectedArray[i] =
        liRefs[i].current.offsetWidth / 2 >=
        Math.abs(ElementCenter - selectorPosition);
    }
    console.log("start");
    setIsSelected(selectedArray);
  };

  return (
    <Wrapper>
      <div className="modal-header">
        <span className="header-title1">Select Tag</span>
        <Link to={`/${selectedTag}`}>
          <span className="header-title2" onClick={onClick}>
            선택
          </span>
        </Link>
      </div>
      <BsCaretRightFill className="selector" />
      <div className="modal-main">
        <ul className="tags" ref={ulRef} onScroll={onScrollHandler}>
          <li className={`tag ${isSelected[0] && "active"}`} ref={liRefs[0]}>
            ALL
          </li>
          {tags.map((tag, index) => {
            return (
              <li
                className={`tag ${isSelected[index + 1] && "active"}`}
                key={index}
                ref={liRefs[index + 1]}
              >
                {tag}
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

export default TagModal;

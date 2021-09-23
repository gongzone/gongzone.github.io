import React, { useRef, useState, useEffect } from "react";
import SelectorModal from "./UI/SelectorModal";

const PaginationModal = ({ tag, onClick, currentPage, totalPagination }) => {
  const [isSelected, setIsSelected] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);

  const pageNumbers = [];

  for (let i = 1; i <= totalPagination; i++) {
    pageNumbers.push(i);
  }

  const ulRef = useRef(null);
  const liRefs = Array.from({ length: totalPagination }, () =>
    React.createRef()
  );

  useEffect(() => {
    const selectedIndex = isSelected.indexOf(true);
    const pageNumber = pageNumbers[selectedIndex];

    setSelectedPage(pageNumber);
  }, [isSelected]);

  useEffect(() => {
    const currentIndex = +currentPage - 1;
    const defaultPosition =
      liRefs[0].current.offsetLeft + liRefs[0].current.offsetWidth / 2;

    if (currentIndex !== 0) {
      ulRef.current.scrollLeft =
        liRefs[currentIndex].current.offsetLeft -
        defaultPosition +
        liRefs[currentIndex].current.offsetWidth / 2;
    }
  }, [currentPage]);

  const onScrollHandler = () => {
    const selectorPosition = ulRef.current.offsetWidth / 2;
    const selectedArray = [];

    for (let i = 0; i < pageNumbers.length; i++) {
      const ElementCenter =
        liRefs[i].current.offsetLeft +
        liRefs[i].current.offsetWidth / 2 -
        ulRef.current.scrollLeft;

      selectedArray[i] =
        liRefs[i].current.offsetWidth / 2 >=
        Math.abs(ElementCenter - selectorPosition);
    }
    setIsSelected(selectedArray);
  };

  let selectedURL = tag ? `${tag}/${selectedPage}` : `${selectedPage}`;

  if (selectedPage === 1) {
    selectedURL = tag ? `${tag}` : "";
  }

  return (
    <>
      <SelectorModal
        title="Page"
        selected={selectedURL}
        onClickHandler={onClick}
        ulRef={ulRef}
        onScrollHandler={onScrollHandler}
        allLists={pageNumbers}
        isSelected={isSelected}
        liRefs={liRefs}
      />
    </>
  );
};

export default PaginationModal;

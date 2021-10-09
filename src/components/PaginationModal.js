import React, { useRef, useState, useEffect } from "react";
import SelectorModal from "./UI/SelectorModal";

const PaginationModal = ({ tag, offModal, currentPage, totalPagination }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPagination; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <SelectorModal
        title="Page"
        lists={pageNumbers}
        currentState={+currentPage}
        offModal={offModal}
        tag={tag}
      />
    </>
  );
};

export default PaginationModal;

import React from "react";
import SelectorModal from "./UI/SelectorModal";
import SelectorModalPC from "./UI/SelectorModalPC";
import { isMobile } from "react-device-detect";

const PaginationModal = ({ tag, offModal, currentPage, totalPagination }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPagination; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {isMobile && (
        <SelectorModal
          title="Page"
          lists={pageNumbers}
          offModal={offModal}
          tag={tag}
        />
      )}
      {!isMobile && pageNumbers.length > 1 && (
        <SelectorModalPC
          title="Page"
          lists={pageNumbers}
          offModal={offModal}
          tag={tag}
        />
      )}
    </>
  );
};

export default PaginationModal;

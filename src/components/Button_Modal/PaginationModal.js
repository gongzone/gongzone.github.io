import React from "react";
import Tag_Pagi_Modal from "../UI/Tag_Pagi_Modal";
import Tag_Pagi_Modal_PC from "../UI/Tag_Pagi_Modal_PC";
import { isMobile } from "react-device-detect";
import Backdrop from "../UI/Backdrop";

const PaginationModal = ({ tag, showModal, offModal, totalPagination }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPagination; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Backdrop isOpen={showModal} onClick={offModal} />
      {isMobile && (
        <Tag_Pagi_Modal
          title="Page"
          lists={pageNumbers}
          offModal={offModal}
          tag={tag}
        />
      )}
      {!isMobile && pageNumbers.length > 1 && (
        <Tag_Pagi_Modal_PC
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

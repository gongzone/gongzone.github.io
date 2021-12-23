import React from "react";
import Tag_Pagi_Modal from "../UI/Tag_Pagi_Modal";
import Tag_Pagi_Modal_PC from "../UI/Tag_Pagi_Modal_PC";
import { isMobile } from "react-device-detect";
import Backdrop from "../UI/Backdrop";

interface paginationModal {
  tag: string | null;
  showModal: boolean;
  offModal: () => void;
  totalPagination: number;
}

const PaginationModal: React.FC<paginationModal> = ({
  tag,
  showModal,
  offModal,
  totalPagination,
}) => {
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
      {!isMobile && (
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

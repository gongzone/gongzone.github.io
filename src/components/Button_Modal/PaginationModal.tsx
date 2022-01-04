import React from "react";
import MobileModal from "../UI/MobileModal";
import DesktopModal from "../UI/DesktopModal";
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
  const pageNumbers: number[] = [];

  for (let i = 1; i <= totalPagination; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Backdrop isOpen={showModal} onClick={offModal} />
      {isMobile && (
        <MobileModal
          title="Page"
          lists={pageNumbers}
          offModal={offModal}
          tag={tag}
        />
      )}
      {!isMobile && (
        <DesktopModal
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

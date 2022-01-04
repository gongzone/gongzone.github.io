import React from "react";
import MobileModal from "../UI/MobileModal";
import DesktopModal from "../UI/DesktopModal";
import { isMobile } from "react-device-detect";
import Backdrop from "../UI/Backdrop";

interface PaginationModalProps {
  tag?: string;
  showModal: boolean;
  offModal: () => void;
  totalPagination: number;
}

const PaginationModal: React.FC<PaginationModalProps> = ({
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
      <Backdrop isOpen={showModal} offModal={offModal} />
      {isMobile && (
        <MobileModal
          usedFor="Page"
          lists={pageNumbers}
          offModal={offModal}
          tag={tag}
        />
      )}
      {!isMobile && (
        <DesktopModal
          usedFor="Page"
          lists={pageNumbers}
          offModal={offModal}
          tag={tag}
        />
      )}
    </>
  );
};

export default PaginationModal;

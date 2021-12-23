import React, { useState } from "react";
import styled from "styled-components";
import PaginationModal from "./PaginationModal";

import { pagination } from "../../interfaces/pagination";

const PaginationButton: React.FC<pagination> = ({
  tag,
  currentPage,
  totalPagination,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onModal = () => {
    setShowModal(true);
  };

  const offModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <PaginationModal
          tag={tag}
          showModal={showModal}
          offModal={offModal}
          totalPagination={totalPagination}
        />
      )}
      <Wrapper onClick={onModal}>
        {currentPage}/{totalPagination}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  background: #f2f2f2;
  font-size: 1.8rem;
  padding: 1.3rem 1.9rem;
  border-radius: 0.7rem;
  box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 25%);
  cursor: pointer;
  left: 50%;
  transform: translateX(-50%);
  -webkit-tap-highlight-color: transparent;
`;

export default PaginationButton;

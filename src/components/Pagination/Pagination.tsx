import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import PaginationModal from "./PaginationModal";
import { BsTriangleFill } from "react-icons/bs";

interface PaginationProps {
  tag?: string;
  currentPage: number;
  totalPagination: number;
}

const Pagination: React.FC<PaginationProps> = ({
  tag,
  currentPage,
  totalPagination,
}) => {
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const nextUrl = tag ? `/${tag}/${currentPage + 1}` : `/${currentPage + 1}`;
  let prevUrl = tag ? `/${tag}/${currentPage - 1}` : `/${currentPage - 1}`;

  if (currentPage === 2) {
    prevUrl = tag ? `/${tag}` : `/`;
  }

  useEffect(() => {
    if (currentPage > 1) {
      setShowPrev(true);
    }

    if (currentPage < totalPagination) {
      setShowNext(true);
    }
  }, [currentPage, totalPagination]);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <Wrapper>
      {showPrev && (
        <Link to={prevUrl} className="card">
          Prev <BsTriangleFill className="prev-triangle" />
        </Link>
      )}
      {showModal && (
        <PaginationModal
          tag={tag}
          showModal={showModal}
          offModal={showModalHandler}
          totalPagination={totalPagination}
        />
      )}
      <button className="card pagi-button" onClick={showModalHandler}>
        {currentPage}/{totalPagination}
      </button>
      {showNext && (
        <Link to={nextUrl} className="card next">
          Next <BsTriangleFill className="next-triangle" />
        </Link>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  top: -1rem;
  width: 88vw;
  height: 4.6rem;
  max-width: 50rem;
  margin: 0 auto 0 auto;
  padding-bottom: 4rem;

  .card {
    position: absolute;
    display: flex;
    align-items: center;
    background: #f2f2f2;
    font-size: 1.8rem;
    padding: 1.3rem 1.9rem;
    border-radius: 0.7rem;
    box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 25%);
  }

  .card.next {
    right: 0;
  }

  .prev-triangle {
    color: rgba(216, 50, 50, 63%);
    margin-left: 0.6rem;
    font-size: 1.4rem;
    transform: rotate(-90deg);
  }

  .next-triangle {
    color: rgba(216, 50, 50, 63%);
    margin-left: 0.6rem;
    font-size: 1.4rem;
    transform: rotate(90deg);
  }

  .pagi-button {
    cursor: pointer;
    left: 50%;
    transform: translateX(-50%);
    -webkit-tap-highlight-color: transparent;
  }

  @media screen and (min-width: 768px) {
    max-width: 85rem;
  }
`;

export default Pagination;

import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { BsTriangleFill } from "react-icons/bs";
import PaginationModal from "./PaginationModal";

const Pagination = ({ tag, currentPage, totalPagination }) => {
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState({ prev: true, next: true });

  useEffect(() => {
    if (+currentPage === 1) {
      setShowButton({ prev: false, next: true });
    }
    if (+currentPage === totalPagination) {
      setShowButton({ prev: true, next: false });
    }
  }, [currentPage, totalPagination]);

  const clickHandler = () => {
    setShowModal(!showModal);
  };

  const nextUrl = tag ? `/${tag}/${+currentPage + 1}` : `/${+currentPage + 1}`;
  let prevUrl = tag ? `/${tag}/${+currentPage - 1}` : `/${+currentPage - 1}`;

  if (+currentPage - 1 === 1) {
    prevUrl = tag ? `/${tag}` : `/`;
  }

  return (
    <>
      {showModal && (
        <PaginationModal
          tag={tag}
          onClick={clickHandler}
          currentPage={currentPage}
          totalPagination={totalPagination}
        />
      )}
      <Wrapper>
        {showButton.prev && (
          <button className="card">
            <Link to={prevUrl}>
              Prev <BsTriangleFill className="prev-triangle" />
            </Link>
          </button>
        )}
        <button className="card pagination-selector" onClick={clickHandler}>
          {currentPage}/{totalPagination}
        </button>
        {showButton.next && (
          <button className="card next">
            <Link to={nextUrl}>
              Next <BsTriangleFill className="next-triangle" />
            </Link>
          </button>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  top: -1rem;
  width: 88vw;
  height: 4.6rem;
  margin: 0 auto 2rem auto;

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

  .card.pagination-selector {
    left: 50%;
    transform: translateX(-50%);
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
`;

export default Pagination;

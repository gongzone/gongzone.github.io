import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { BsTriangleFill } from "react-icons/bs";
import PaginationButton from "./Button_Modal/PaginationButton";

const Pagination = ({ tag, currentPage, totalPagination }) => {
  const [showButton, setShowButton] = useState({ prev: false, next: false });

  useEffect(() => {
    if (+currentPage === 1 && +totalPagination > 1) {
      setShowButton({ prev: false, next: true });
    } else if (+currentPage === +totalPagination) {
      setShowButton({ prev: true, next: false });
    } else {
      setShowButton({ prev: true, next: true });
    }
  }, [currentPage, totalPagination]);

  const nextUrl = tag ? `/${tag}/${+currentPage + 1}` : `/${+currentPage + 1}`;
  let prevUrl = tag ? `/${tag}/${+currentPage - 1}` : `/${+currentPage - 1}`;

  if (+currentPage - 1 === 1) {
    prevUrl = tag ? `/${tag}` : `/`;
  }

  return (
    <Wrapper>
      {showButton.prev && (
        <Link to={prevUrl} className="card">
          Prev <BsTriangleFill className="prev-triangle" />
        </Link>
      )}
      <PaginationButton
        tag={tag}
        currentPage={currentPage}
        totalPagination={totalPagination}
      />
      {showButton.next && (
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

  @media screen and (min-width: 768px) {
    max-width: 85rem;
  }

  @media screen and (min-width: 2000px) {
    .card {
      font-size: 2.3rem;
      padding: 1.5rem 2.1rem;
    }
    max-width: 105rem;
  }
`;

export default Pagination;

import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import SearchModalList from "./SearchModalList";
import Backdrop from "../UI/Backdrop";

const SearchModal = ({ showModal, offModal }) => {
  const [searchInput, setSearchInput] = useState("");

  const changeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <Backdrop isOpen={showModal} onClick={offModal} />
      <Wrapper>
        <div className="container">
          <header className="search-header">
            <form className="search-form">
              <label className="search-label" htmlFor="search">
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="search-input"
                  placeholder="Search..."
                  autoComplete="off"
                  onChange={changeHandler}
                />
              </label>
            </form>
            <button className="cancel" onClick={offModal}>
              <FaTimes />
            </button>
          </header>
          <main className="search-main">
            <SearchModalList searchInput={searchInput} />
          </main>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  background: #fcfcfc;
  z-index: 889;
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  max-width: 80rem;
  width: 90vw;
  height: 80vh;
  box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 25%);

  .container {
    width: 90%;
  }

  .search-header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8rem;
  }

  .search-form {
    width: 88%;
  }

  .search-label {
    display: flex;
  }

  .search-input {
    width: 100%;
    height: 5rem;
    border: 0;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 15%);
  }

  .search-input:focus {
    outline: none;
  }

  .cancel {
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    border: 0rem;
    padding: 0.6rem;
    font-size: 3.2rem;
    color: #e25050;
    background: transparent;
    cursor: pointer;
  }

  .search-main {
    display: block;
    position: relative;
    width: 100%;
    height: 75%;
  }
`;

export default SearchModal;

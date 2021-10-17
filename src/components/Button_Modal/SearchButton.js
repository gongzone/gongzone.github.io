import React, { useState } from "react";
import SearchModal from "./SearchModal";
import SelectorButton from "../UI/SelectorButton";

const SearchButton = () => {
  const [showModal, setShowModal] = useState(false);

  const onModal = () => {
    setShowModal(true);
  };

  const offModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && <SearchModal offModal={offModal} />}
      <SelectorButton onModal={onModal} icon="search"></SelectorButton>
    </>
  );
};

export default SearchButton;

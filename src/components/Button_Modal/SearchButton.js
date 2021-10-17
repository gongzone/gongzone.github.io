import React, { useState } from "react";
import SelectorButton from "../UI/SelectorButton";

const SearchButton = () => {
  const [showModal, setShowModal] = useState(false);

  const onModal = () => {
    setShowModal(true);
  };

  const offModal = () => {
    setShowModal(false);
  };

  return <SelectorButton onModal={onModal} icon="search"></SelectorButton>;
};

export default SearchButton;

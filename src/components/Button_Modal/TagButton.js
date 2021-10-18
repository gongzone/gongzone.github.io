import React, { useState } from "react";
import TagModal from "./TagModal";
import SelectorButton from "../UI/SelectorButton";

const TagButton = ({ tag }) => {
  const [showModal, setShowModal] = useState(false);

  const onModal = () => {
    setShowModal(true);
  };

  const offModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && <TagModal showModal={showModal} offModal={offModal} />}
      <SelectorButton
        tag={tag}
        onModal={onModal}
        icon="triangle"
      ></SelectorButton>
    </>
  );
};

export default TagButton;

import React, { useRef, useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import SelectorModal from "./UI/SelectorModal";
import SelectorModalPC from "./UI/SelectorModalPC";
import { isMobile } from "react-device-detect";

const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___tags)
    }
  }
`;

const TagModal = ({ offModal, tag }) => {
  const {
    allMdx: { distinct: tags },
  } = useStaticQuery(query);

  const allTags = ["ALL", ...tags];

  return (
    <>
      {isMobile && (
        <SelectorModal title="Tag" lists={allTags} offModal={offModal} />
      )}
      {!isMobile && (
        <SelectorModalPC title="Tag" lists={allTags} offModal={offModal} />
      )}
    </>
  );
};

export default TagModal;

import React, { useRef, useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import SelectorModal from "./UI/SelectorModal";

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
      <SelectorModal
        title="Tag"
        lists={allTags}
        currentState={tag}
        offModal={offModal}
      />
    </>
  );
};

export default TagModal;

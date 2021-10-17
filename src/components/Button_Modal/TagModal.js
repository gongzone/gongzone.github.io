import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Tag_Pagi_Modal from "../UI/Tag_Pagi_Modal";
import Tag_Pagi_Modal_PC from "../UI/Tag_Pagi_Modal_PC";
import { isMobile } from "react-device-detect";

const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___tags)
    }
  }
`;

const TagModal = ({ offModal }) => {
  const {
    allMdx: { distinct: tags },
  } = useStaticQuery(query);

  const allTags = ["ALL", ...tags];

  return (
    <>
      {isMobile && (
        <Tag_Pagi_Modal title="Tag" lists={allTags} offModal={offModal} />
      )}
      {!isMobile && (
        <Tag_Pagi_Modal_PC title="Tag" lists={allTags} offModal={offModal} />
      )}
    </>
  );
};

export default TagModal;

import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import MobileModal from "../UI/MobileModal";
import DesktopModal from "../UI/DesktopModal";
import { isMobile } from "react-device-detect";
import Backdrop from "../UI/Backdrop";

interface TagModalProps {
  showModal: boolean;
  offModal: () => void;
}

const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___tags)
    }
  }
`;

const TagModal: React.FC<TagModalProps> = ({ showModal, offModal }) => {
  const {
    allMdx: { distinct: tags },
  } = useStaticQuery(query);

  const allTags = ["ALL", ...tags];

  return (
    <>
      <Backdrop isOpen={showModal} offModal={offModal} />
      {isMobile && (
        <MobileModal usedFor="Tag" lists={allTags} offModal={offModal} />
      )}
      {!isMobile && (
        <DesktopModal usedFor="Tag" lists={allTags} offModal={offModal} />
      )}
    </>
  );
};

export default TagModal;

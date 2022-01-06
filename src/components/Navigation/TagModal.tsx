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

interface QueryType {
  allMdx: {
    nodes: {
      frontmatter: {
        tags: {
          name: string;
          slug: string;
        }[];
      };
    }[];
  };
}

const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          tags {
            name
            slug
          }
        }
      }
    }
  }
`;

const TagModal: React.FC<TagModalProps> = ({ showModal, offModal }) => {
  const {
    allMdx: { nodes },
  } = useStaticQuery<QueryType>(query);

  const allTags: { name: string; slug: string }[] = [{ name: "ALL", slug: "" }];

  nodes.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => {
      allTags.push(tag);
    });
  });

  const distinctTags: { name: string; slug: string }[] = [
    ...new Set(allTags.map((tag) => JSON.stringify(tag))),
  ].map((result) => JSON.parse(result));

  return (
    <>
      <Backdrop isOpen={showModal} offModal={offModal} />
      {isMobile && (
        <MobileModal usedFor="Tag" lists={distinctTags} offModal={offModal} />
      )}
      {!isMobile && (
        <DesktopModal usedFor="Tag" lists={distinctTags} offModal={offModal} />
      )}
    </>
  );
};

export default TagModal;

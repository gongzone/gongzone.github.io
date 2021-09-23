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

const TagModal = ({ onClick, tag }) => {
  const {
    allMdx: { distinct: tags },
  } = useStaticQuery(query);

  const allTags = ["ALL", ...tags];

  const [isSelected, setIsSelected] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  const ulRef = useRef(null);
  const liRefs = Array.from({ length: allTags.length }, () =>
    React.createRef()
  );

  useEffect(() => {
    const selectedIndex = isSelected.indexOf(true);
    const tag = allTags[selectedIndex] === "ALL" ? "" : allTags[selectedIndex];

    setSelectedTag(tag);
  }, [isSelected]);

  useEffect(() => {
    const selectedTagIndex = allTags.indexOf(tag);
    const defaultPosition =
      liRefs[0].current.offsetLeft + liRefs[0].current.offsetWidth / 2;

    if (selectedTagIndex !== 0) {
      ulRef.current.scrollLeft =
        liRefs[selectedTagIndex].current.offsetLeft -
        defaultPosition +
        liRefs[selectedTagIndex].current.offsetWidth / 2;
    }
  }, [tag]);

  const onScrollHandler = () => {
    const selectorPosition = ulRef.current.offsetWidth / 2;
    const selectedArray = [];

    for (let i = 0; i < allTags.length; i++) {
      const ElementCenter =
        liRefs[i].current.offsetLeft +
        liRefs[i].current.offsetWidth / 2 -
        ulRef.current.scrollLeft;

      selectedArray[i] =
        liRefs[i].current.offsetWidth / 2 >=
        Math.abs(ElementCenter - selectorPosition);
    }
    setIsSelected(selectedArray);
  };

  return (
    <>
      <SelectorModal
        title="Tag"
        selected={selectedTag}
        onClickHandler={onClick}
        ulRef={ulRef}
        onScrollHandler={onScrollHandler}
        allLists={allTags}
        isSelected={isSelected}
        liRefs={liRefs}
      />
    </>
  );
};

export default TagModal;

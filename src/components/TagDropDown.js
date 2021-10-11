import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___tags)
    }
  }
`;

const TagDropDown = () => {
  const {
    allMdx: { distinct: tags },
  } = useStaticQuery(query);

  const allTags = ["ALL", ...tags];

  return (
    <Wrapper>
      <ul className="tags">
        {allTags.map((tag, index) => {
          return <li key={index}>{tag}</li>;
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  z-index: 777;
  height: 20rem;
  overflow-y: scroll;
  max-width: 46rem;
  width: 83.3%;
  top: 11rem;
  background: white;
  .tags {
    height: 100%;
    margin: 0;
  }
`;
export default TagDropDown;

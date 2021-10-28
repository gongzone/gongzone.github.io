import React, { useEffect } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { CgList } from "react-icons/cg";
import styled from "styled-components";

const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          slug
        }
      }
    }
  }
`;

const SearchModalList = ({ searchInput }) => {
  const {
    allMdx: { nodes: posts },
  } = useStaticQuery(query);

  //외부 스크롤 불가능하게 만들기
  useEffect(() => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    document.body.style.position = "fixed";
    document.body.style["overflow-y"] = "scroll";
    document.body.style.top = `${-top}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "unset";
      document.body.style["overflow-y"] = "unset";
      document.documentElement.scrollTop = top;
    };
  }, []);

  const filteredPosts = posts.filter((post) => {
    const postTitle = post.frontmatter.title.toUpperCase();
    const input = searchInput.toUpperCase();

    if (searchInput) {
      return postTitle.includes(input);
    } else {
      return;
    }
  });

  return (
    <>
      {filteredPosts.length > 0 && (
        <Ul>
          {filteredPosts.map((post, index) => {
            const title = post.frontmatter.title;
            const slug = post.frontmatter.slug;

            return (
              <li className="filter-list" key={index}>
                <Link className="filter-link" to={`/${slug}`}>
                  <CgList className="filter-icon" />
                  <span className="filter-title">{title}</span>
                </Link>
              </li>
            );
          })}
        </Ul>
      )}
      {filteredPosts.length === 0 && (
        <Div>
          <span className="info">검색 결과가 없습니다. 🙊</span>
          <span>There are no search results.</span>
        </Div>
      )}
    </>
  );
};

const Ul = styled.ul`
  margin: 0;
  height: 100%;
  overflow-y: scroll;

  .filter-list {
    margin-bottom: 0.8rem;
  }

  .filter-link {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    background: #d6d4e0;
    border-radius: 0.7rem;
    padding: 3rem 0;
    width: 100%;
    height: 100%;
  }

  .filter-link:hover {
    background: #355c7d;
    color: white;
  }

  .filter-icon {
    flex-shrink: 0;
    padding-top: 0.2rem;
    margin-left: 1.5rem;
    font-size: 1.7rem;
  }

  .filter-title {
    line-height: 1.3;
    font-weight: 700;
    margin-left: 1rem;
    margin-right: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    .filter-link {
      font-size: 1.7rem;
    }

    .filter-icon {
      margin-left: 2rem;
      font-size: 2.2rem;
    }

    .filter-title {
      line-height: 1.3;
      margin-left: 2rem;
      margin-right: 4rem;
    }
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  font-size: 1.7rem;
  font-weight: bold;
  width: 100%;
  padding: 2rem;
  left: 50%;
  transform: translateX(-50%);

  .info {
    margin-left: 1.2rem;
    margin-bottom: 1rem;
  }
`;

export default SearchModalList;

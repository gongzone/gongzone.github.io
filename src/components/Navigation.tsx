import React from "react";
import styled from "styled-components";
import TagButton from "./Button_Modal/TagButton";
import SearchButton from "./Button_Modal/SearchButton";

interface NavigationProps {
  tag: string;
}

const Navigation: React.FC<NavigationProps> = ({ tag }) => {
  return (
    <Wrapper>
      <div className="title-container">
        <span className="title">GongZone DevBlog</span>
        <div className="highlight"></div>
      </div>
      <TagButton tag={tag} />
      <SearchButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20rem;
  font-size: 1.9rem;
  margin-top: 1.5rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 15%);

  .title-container {
    position: relative;
    display: flex;
    justify-content: center;
  }
  .title {
    font-family: "Carrois Gothic SC", arial, sans-serif;
    font-size: 3rem;
    color: white;
    text-shadow: 0 0 2px #cc7474, 0 0 2px #cc7474, 0 0 2px #cc7474,
      0 0 2px #cc7474, 0 0 2px #cc7474, 0 0 2px #cc7474, 0 0 2px #cc7474,
      0 0 2px #cc7474, 0 0 2px #cc7474, 0 0 2px #cc7474, 0 0 2px #cc7474,
      0 0 2px #cc7474, 0 0 2px #cc7474, 0 0 2px #cc7474, 0 0 2px #cc7474,
      0 0 2px #cc7474;
  }

  .highlight {
    position: absolute;
    top: 63%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 29.5rem;
    height: 1.9rem;
    background: rgba(135, 88, 157, 20%);
  }

  @media screen and (min-width: 2000px) {
    margin-top: 2rem;
    height: 24rem;

    .title {
      font-size: 3.5rem;
    }

    .highlight {
      position: absolute;
      top: 63%;
      left: 50%;
      transform: translate(-50%, 0);
      width: 34.5rem;
      height: 2.1rem;
      background: rgba(135, 88, 157, 20%);
    }
  }
`;

export default Navigation;

import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../assets/images/Hero-Background.png"
        placeholder="tracedSVG"
        layout="fullWidth"
        className="hero-background"
        alt="hero-background"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hero-background {
    max-height: 45rem;
  }
`;

export default Hero;

import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import heroLogo from "../assets/images/hero-logo.svg";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../assets/images/Hero-Background.jpg"
        className="hero-background"
        placeholder="tracedSVG"
        alt="hero-background"
      />
      <Link to="/" className="hero-logo">
        <img src={heroLogo} alt="hero-logo" />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  .hero-logo {
    position: absolute;
    width: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
  }
`;

export default Hero;

import React from "react";
import styled from "styled-components";

export const RegVideo = (props) => {
  return (
    <RegVideoWrapper>
      <video controls muted>
        <source src={props.video} type={`video/${props.type}`} />
      </video>
    </RegVideoWrapper>
  );
};

const RegVideoWrapper = styled.div`
  width: 100%;
  video {
    width: 100%;
    object-fit: cover;
  }
`;

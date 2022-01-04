import React from "react";
import styled from "styled-components";

export const RegVideo: React.FC<{ video: any; type: string }> = ({
  video,
  type,
}) => {
  return (
    <RegVideoWrapper>
      <video controls muted>
        <source src={video} type={`video/${type}`} />
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

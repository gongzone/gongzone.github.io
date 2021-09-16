import React from "react";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwlLight";

const Example = (props) => {
  const code = props.children.props.children.trim();
  const language = props.children.props.className.split("-")[1];

  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <div className="language-tab">{language.toUpperCase()}</div>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

const Pre = styled.pre`
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  margin: 3rem 0;
  font-size: 1.5rem;
  font-family: "Fira Code", imprima, arial, monospace;
  overflow-x: scroll;

  .token-line {
    line-height: 1.5;
  }

  .language-tab {
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 700;
    background: #ffb997;
    padding: 0.3rem 0.5rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
  }
`;

export default Example;

import React from "react";
import styled from "styled-components";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

const CodeBlock: React.FC<{ children: any }> = ({ children }) => {
  const code: string = children.props.children;
  const language = children.props.className.split("-")[1] as Language;

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
  font-size: 1.6rem;
  font-family: "Fira Code", imprima, arial, monospace;
  overflow-x: auto;

  .token-line {
    line-height: 1.5;
  }

  .language-tab {
    color: #222222;
    display: inline-block;
    font-size: 1.7rem;
    font-weight: 700;
    background: #9bb9e0;
    padding: 0.3rem 0.5rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
  }
`;

export default CodeBlock;

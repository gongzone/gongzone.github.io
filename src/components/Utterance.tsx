import React, { createRef, useEffect } from 'react';

const Utterance = () => {
  const commentRef: React.RefObject<HTMLDivElement> = createRef();

  useEffect(() => {
    const utterances = document.createElement('script');

    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo: 'gongzone/blog-comments',
      'issue-term': 'title',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: true,
    };
    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value.toString());
    });

    commentRef.current?.appendChild(utterances);
  }, []);

  return <div className="comments" ref={commentRef}></div>;
};

export default Utterance;

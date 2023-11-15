import React, { useRef, useEffect } from 'react';

const utterancesSettings = {
  src: 'https://utteranc.es/client.js',
  repo: 'naninyang/develog',
  'issue-term': 'pathname',
  label: 'comments',
  theme: 'github-dark',
  crossorigin: 'anonymous',
  async: 'true',
};

const PostComment = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current !== null) {
      const utterances = document.createElement('script');

      Object.entries(utterancesSettings).forEach(([key, value]) => {
        utterances.setAttribute(key, value);
      });

      ref.current.appendChild(utterances);
    }
  }, []);

  return <div className="post-comment" ref={ref} />;
};

export default PostComment;

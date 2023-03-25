import React from 'react';
import './SnippetsColumn.css';

const SnippetsColumn = () => {
  const snippets = ['Snippet 1', 'Snippet 2', 'Snippet 3', 'Snippet 4'];

  return (
      <div className="snippets-column">
        <ul>
          {snippets.map((snippet, index) => (
            <li key={index}>{snippet}</li>
          ))}
        </ul>
      </div>
  );
};

export default SnippetsColumn;
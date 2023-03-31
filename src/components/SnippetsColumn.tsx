import React from 'react';
import './SnippetsColumn.css';

interface SnippetsColumnProps {
  selectedCollection: string | null;
  setSelectedSnippet: (snippet: string | null) => void;
}

const SnippetsColumn: React.FC<SnippetsColumnProps> = ({ selectedCollection, setSelectedSnippet }) => {
  const snippets: Record<string, string[]> = {
    'Collection 1': ['Snippet 1-1', 'Snippet 1-2', 'Snippet 1-3', 'Snippet 1-4'],
    'Collection 2': ['Snippet 2-1', 'Snippet 2-2', 'Snippet 2-3', 'Snippet 2-4'],
    'Collection 3': ['Snippet 3-1', 'Snippet 3-2', 'Snippet 3-3', 'Snippet 3-4'],
    'Collection 4': ['Snippet 4-1', 'Snippet 4-2', 'Snippet 4-3', 'Snippet 4-4']
  };

  const displayedSnippets = selectedCollection ? snippets[selectedCollection] : [];

  return (
    <div className="snippets-column">
      <ul>
        {displayedSnippets.map((snippet, index) => (
          <li key={index} onClick={() => setSelectedSnippet(snippet)}>
            {snippet}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SnippetsColumn;

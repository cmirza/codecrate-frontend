import React, { useState } from 'react';
import './SnippetsColumn.css';

interface SnippetsColumnProps {
  selectedCollection: string | null;
  setSelectedSnippet: (snippet: string | null) => void;
}

const SnippetsColumn: React.FC<SnippetsColumnProps> = ({ selectedCollection, setSelectedSnippet }) => {
  const [snippets, setSnippets] = useState<Record<string, string[]>>({
    'Collection 1': ['Snippet 1-1', 'Snippet 1-2', 'Snippet 1-3', 'Snippet 1-4'],
    'Collection 2': ['Snippet 2-1', 'Snippet 2-2', 'Snippet 2-3', 'Snippet 2-4'],
    'Collection 3': ['Snippet 3-1', 'Snippet 3-2', 'Snippet 3-3', 'Snippet 3-4'],
    'Collection 4': ['Snippet 4-1', 'Snippet 4-2', 'Snippet 4-3', 'Snippet 4-4']
  });

  const displayedSnippets = selectedCollection && snippets[selectedCollection] ? snippets[selectedCollection] : [];
  const [newSnippetName, setNewSnippetName] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewSnippetName(event.target.value);
  };

  const handleDeleteSnippet = (snippetToDelete: string) => {
    if (selectedCollection) {
      const updatedSnippets = {
        ...snippets,
        [selectedCollection]: snippets[selectedCollection].filter(
          snippet => snippet !== snippetToDelete
          )
      };
      setSnippets(updatedSnippets);
      setSelectedSnippet(null);
    }
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newSnippetName.trim() && selectedCollection) {
      const collectionSnippets = snippets[selectedCollection] || [];
      const updatedSnippets = {
        ...snippets,
        [selectedCollection]: [...(collectionSnippets || []), newSnippetName.trim()]
      };
      setSnippets(updatedSnippets);
      setNewSnippetName('');
    }
  };

  return (
    <div className="snippets-column">
      <ul>
        {displayedSnippets.map((snippet, index) => (
          <li key={index}>
            <span onClick={() => setSelectedSnippet(snippet)}>{snippet}</span>
            <button onClick={() => handleDeleteSnippet(snippet)}>X</button>
          </li>
        ))}
      </ul>
      {selectedCollection && (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={newSnippetName}
            onChange={handleInputChange}
            placeholder="New Snippet Name"
          />
          <button type="submit">+</button>
        </form>
      )}
    </div>
  );
};

export default SnippetsColumn;

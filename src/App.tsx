import React, { useState } from 'react';
import './App.css';
import './Layout.css';
import UserColumn from './components/UserColumn';
import CollectionsColumn from './components/CollectionsColumn';
import SnippetsColumn from './components/SnippetsColumn';
import SnippetDetailsColumn from './components/SnippetDetailsColumn';

const App: React.FC = () => {
  const [collections, setCollections] = useState<string[]>([
    'Collection 1',
    'Collection 2',
    'Collection 3',
    'Collection 4'
  ]);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [selectedSnippet, setSelectedSnippet] = useState<string | null>(null);
  const [snippets, setSnippets] = useState<Record<string, string[]>>({
    'Collection 1': ['Snippet 1-1', 'Snippet 1-2', 'Snippet 1-3', 'Snippet 1-4'],
    'Collection 2': ['Snippet 2-1', 'Snippet 2-2', 'Snippet 2-3', 'Snippet 2-4'],
    'Collection 3': ['Snippet 3-1', 'Snippet 3-2', 'Snippet 3-3', 'Snippet 3-4'],
    'Collection 4': ['Snippet 4-1', 'Snippet 4-2', 'Snippet 4-3', 'Snippet 4-4']
  });

  const handleCollectionSelect = (collectionName: string | null) => {
    setSelectedCollection(collectionName);
    setSelectedSnippet(null);
  };

  const handleCollectionDelete = (collectionName: string) => {
    if (collectionName === selectedCollection) {
      setSelectedCollection(null);
      setSelectedSnippet(null);
    }
  };

  return (
    <div className="App">
      <div className="app-layout">
        <UserColumn />
        <CollectionsColumn
          onCollectionSelect={handleCollectionSelect}
          onCollectionDelete={handleCollectionDelete}
          collections={collections}
          setCollections={setCollections}
        />
        <SnippetsColumn
          selectedCollection={selectedCollection}
          setSelectedSnippet={setSelectedSnippet}
          snippets={snippets}
          setSnippets={setSnippets}
        />
        <SnippetDetailsColumn selectedSnippet={selectedSnippet} />
      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';
import './Layout.css';
import UserColumn from './components/UserColumn';
import CollectionsColumn from './components/CollectionsColumn';
import SnippetsColumn from './components/SnippetsColumn';
import SnippetDetailsColumn from './components/SnippetDetailsColumn';

const App: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [selectedSnippet, setSelectedSnippet] = useState<string | null>(null);

  const handleCollectionSelect = (collectionName: string | null) => {
    setSelectedCollection(collectionName);
  };

  return (
    <div className="App">
      <div className="app-layout">
        <UserColumn />
        <CollectionsColumn onCollectionSelect={setSelectedCollection} />
        <SnippetsColumn selectedCollection={selectedCollection} setSelectedSnippet={setSelectedSnippet} />
        <SnippetDetailsColumn selectedSnippet={selectedSnippet} />
      </div>
    </div>
  );
};

export default App;

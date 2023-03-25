import React from 'react';
import './App.css';
import './Layout.css';
import UserColumn from './components/UserColumn';
import CollectionsColumn from './components/CollectionsColumn';
import SnippetsColumn from './components/SnippetsColumn';
import SnippetDetailsColumn from './components/SnippetDetailsColumn';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="app-layout">
        <UserColumn />
        <CollectionsColumn />
        <SnippetsColumn />
        <SnippetDetailsColumn />
      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './CollectionsColumn.css';

const CollectionsColumn: React.FC = () => {
  const [collections, setCollections] = useState<string[]>([
    'Collection 1',
    'Collection 2',
    'Collection 3',
    'Collection 4'
  ]);

  const [newCollectionName, setNewCollectionName] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCollectionName(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newCollectionName.trim()) {
      setCollections([...collections, newCollectionName.trim()]);
      setNewCollectionName('');
    }
  };

  return (
      <div className="collections-column">
        <ul>
          {collections.map((collection, index) => (
            <li key={index}>{collection}</li>
          ))}
        </ul>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={newCollectionName}
            onChange={handleInputChange}
            placeholder="New Collection Name"
          />
          <button type="submit">Add Collection</button>
        </form>
      </div>
  );
};

export default CollectionsColumn;

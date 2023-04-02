import React, { useState } from 'react';
import './CollectionsColumn.css';

interface CollectionsColumnProps {
  onCollectionSelect: (collectionName: string | null) => void;
  onCollectionDelete: (collectionName: string) => void;
}

const CollectionsColumn: React.FC<CollectionsColumnProps> = ({ onCollectionSelect, onCollectionDelete }) => {
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

  const handleCollectionClick = (collection: string) => {
    onCollectionSelect(collection);
  };

  const handleDeleteCollection = (collectionToDelete: string) => {
    setCollections(collections.filter(collection => collection !== collectionToDelete));
    onCollectionDelete(collectionToDelete);
  };

  return (
      <div className="collections-column">
        <ul>
          {collections.map((collection, index) => (
          <li key={index}>
            <span onClick={() => handleCollectionClick(collection)}>{collection}</span>
            <button onClick={() => handleDeleteCollection(collection)}>X</button>
          </li>
          ))}
        </ul>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={newCollectionName}
            onChange={handleInputChange}
            placeholder="New Collection Name"
          />
          <button type="submit">+</button>
        </form>
      </div>
  );
};

export default CollectionsColumn;

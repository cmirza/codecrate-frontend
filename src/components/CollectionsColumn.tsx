import React from 'react';
import './CollectionsColumn.css';

const CollectionsColumn = () => {
  const collections = ['Collection 1', 'Collection 2', 'Collection 3', 'Collection 4'];

  return (
      <div className="collections-column">
        <ul>
          {collections.map((collection, index) => (
            <li key={index}>{collection}</li>
          ))}
        </ul>
      </div>
  );
};

export default CollectionsColumn;
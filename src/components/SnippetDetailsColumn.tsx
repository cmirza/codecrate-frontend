import React from 'react';
import './SnippetDetailsColumn.css';

const SnippetDetailsColumn: React.FC = () => {
  return (
    <div className="snippet-details-column">
      <div className='black-box'>
        <pre style={{ textAlign: 'left'}}>
          <code>
            {`function helloWorld() {
  console.log('Hello World!');
}`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default SnippetDetailsColumn;

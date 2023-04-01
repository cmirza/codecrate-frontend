import React, { useState, useEffect } from 'react';
import './SnippetDetailsColumn.css';

interface SnippetDetailsColumnProps {
  selectedSnippet: string | null;
}

const SnippetDetailsColumn: React.FC<SnippetDetailsColumnProps> = ({ selectedSnippet }) => {
  const [snippets, setSnippets] = useState<Record<string, string>>({
    'Snippet 1-1': `function example1() {
  console.log('Example 1');
    }`,
    'Snippet 1-2': `function example2() {
  console.log('Example 2');
    }`,
    'Snippet 1-3': `function example3() {
  console.log('Example 3');
    }`,
    'Snippet 1-4': `function example4() {
  console.log('Example 4');
    }`,
    'Snippet 2-1': `function example5() {
  console.log('Example 5');
    }`,
    'Snippet 2-2': `function example6() {
  console.log('Example 6');
    }`,
    'Snippet 2-3': `function example7() {
  console.log('Example 7');
    }`,
    'Snippet 2-4': `function example8() {
  console.log('Example 8');
    }`,
    'Snippet 3-1': `function example9() {
  console.log('Example 9');
    }`,
    'Snippet 3-2': `function example10() {
  console.log('Example 10');
    }`,
    'Snippet 3-3': `function example11() {
  console.log('Example 11');
    }`,
    'Snippet 3-4': `function example12() {
  console.log('Example 12');
    }`,
    'Snippet 4-1': `function example13() {
  console.log('Example 13');
    }`,
    'Snippet 4-2': `function example14() {
  console.log('Example 14');
    }`,
    'Snippet 4-3': `function example15() {
  console.log('Example 15');
    }`,
    'Snippet 4-4': `function example16() {
  console.log('Example 16');
    }`
  });

  const [snippetContentEditable, setSnippetContentEditable] = useState<string>('');

  const snippetContent = selectedSnippet ? snippets[selectedSnippet] : '';

  useEffect(() => {
    setSnippetContentEditable(snippetContent);
  }, [snippetContent]);

  const handleContentEditableChange = (event: React.SyntheticEvent<HTMLDivElement>) => {
    const updatedContent = event.currentTarget.textContent || '';
    setSnippetContentEditable(updatedContent);
  };

  const handleSaveSnippet = () => {
    if (selectedSnippet) {
      const updatedSnippets = {
        ...snippets,
        [selectedSnippet]: snippetContentEditable
      };
      setSnippets(updatedSnippets);
    }
  };

  return (
    <div className="snippet-details-column">
      <div 
        className='black-box'
        contentEditable
        suppressContentEditableWarning
        onBlur={handleContentEditableChange}
      >
        {snippetContent}
      </div>
        <button onClick={handleSaveSnippet}>Save</button>
    </div>
  );
};

export default SnippetDetailsColumn;

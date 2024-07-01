import { useState } from 'react';

const TextComponent = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const getFirstSentence = (text) => {
    const sentences = text.split('. ');
    return sentences.length > 0 ? sentences[0] + '.' : text;
  };

  return (
    <div>
      <p>{isExpanded ? text : getFirstSentence(text)}</p>
      <button onClick={toggleText}>
        {isExpanded ? 'Скрыть' : 'Показать подробнее'}
      </button>
    </div>
  );
};

export default TextComponent;

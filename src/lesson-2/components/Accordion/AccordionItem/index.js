// Core
import { useState } from 'react';
import { string } from 'prop-types';

// Components

// Elements

// Styles

export const AccordionItem = ({ question, answer} ) => {
  const [isOpened, setIsOpened] = useState(false);

  const _click = () => void setIsOpened(!isOpened);

  return (
    <div
      className={`accordion-item${isOpened ? ' selected' : ''}`}
      onClick={_click}
    >
      <div className='accordion-question'>
        <span>{question}</span>
        <p className='accordion-answer'>{answer}</p>
      </div>
    </div>
  );
};


AccordionItem.propTypes = {
  question: string.isRequired,
  answer: string.isRequired
};

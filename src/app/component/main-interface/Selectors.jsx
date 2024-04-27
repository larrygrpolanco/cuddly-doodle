import React, { useState } from 'react';
import GenericSelector from './GenericSelector';

export default function Selectors({isMenuOpen}) {
  const [isOpenDirection, setIsOpenDirection] = useState(false);
  const [isOpenWeek, setIsOpenWeek] = useState(false);
  const [isOpenVocab, setIsOpenVocab] = useState(false);
  const [direction, setDirection] = useState('Random');
  const [week, setWeek] = useState('Week 1');
  const [vocab, setVocab] = useState('Word 1');

  const closeAll = () => {
    setIsOpenDirection(false);
    setIsOpenWeek(false);
    setIsOpenVocab(false);
  };

  return (
    <div>
      <GenericSelector
        title='Scaffolding Direction'
        options={['Random', 'Upward', 'Downward']}
        selected={direction}
        setSelected={setDirection}
        isOpen={isOpenDirection}
        setIsOpen={setIsOpenDirection}
        closeAll={closeAll}
      />
      <GenericSelector
        title='Week'
        options={['Week 1', 'Week 2', 'Week 3']}
        selected={week}
        setSelected={setWeek}
        isOpen={isOpenWeek}
        setIsOpen={setIsOpenWeek}
        closeAll={closeAll}
      />
      <GenericSelector
        title='Vocabulary'
        options={['Word 1', 'Word 2', 'Word 3', 'Word 4', 'Word 5']}
        selected={vocab}
        setSelected={setVocab}
        isOpen={isOpenVocab}
        setIsOpen={setIsOpenVocab}
        closeAll={closeAll}
      />
    </div>
  );
}

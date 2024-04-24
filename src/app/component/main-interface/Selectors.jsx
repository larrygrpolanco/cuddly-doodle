'use client';
import React, { useState } from 'react';

export default function Selectors() {
  // Styles
  const summaryClass = 'mb-1 btn btn-primary text-primary-content rounded-lg w-52';
  const listClass =
    'p-2 ml-2 shadow menu dropdown-content bg-base-100/90 text-base-content z-[1] rounded-box w-52';
  const boxClass =
    'flex flex-col items-center mb-5 bg-secondary rounded-lg shadow-md';
  const choiceClass = 'font-bold text-sm p-1 text-secondary-content';

  // State to manage the open/close of the dropdown
  const [isOpenDirection, setIsOpenDirection] = useState(false);
  const [isOpenWeek, setIsOpenWeek] = useState(false);
  const [isOpenVocab, setIsOpenVocab] = useState(false);
  const [Direction, setDirection] = useState('Random');
  const [Week, setWeek] = useState('Week 1');
  const [Vocab, setVocab] = useState('Word 1');

  const handleToggleDirection = (event) => {
    if (event.target.open) {
      // Check if the dropdown is being opened
      setIsOpenWeek(false); // Close the Week dropdown
      setIsOpenVocab(false); // Close the Vocabulary dropdown
    }
    setIsOpenDirection(event.target.open);
  };

  const handleToggleWeek = (event) => {
    if (event.target.open) {
      setIsOpenDirection(false);
      setIsOpenVocab(false);
    }
    setIsOpenWeek(event.target.open);
  };

  const handleToggleVocab = (event) => {
    if (event.target.open) {
      setIsOpenDirection(false);
      setIsOpenWeek(false);
    }
    setIsOpenVocab(event.target.open);
  };

  const handleClick = (setter, value) => (event) => {
    event.stopPropagation();
    setter(value); // Set the selected value
    setTimeout(() => {
      setIsOpenDirection(false);
      setIsOpenWeek(false);
      setIsOpenVocab(false);
    }, 160);
  };

  return (
    <div>
      {/*Direction Selector */}
      <div className={boxClass}>
        <details
          className='dropdown dropdown-right'
          open={isOpenDirection}
          onToggle={handleToggleDirection}
        >
          <summary className={summaryClass}>Scaffolding Direction</summary>
          <ul className={listClass}>
            <li onClick={handleClick(setDirection, 'Random')}>
              <a>Random</a>
            </li>
            <li onClick={handleClick(setDirection, 'Upward')}>
              <a>Upward</a>
            </li>
            <li onClick={handleClick(setDirection, 'Downward')}>
              <a>Downward</a>
            </li>
          </ul>
        </details>
        <p className={choiceClass}>{Direction}</p>
      </div>
      {/* Week Selector  */}
      <div className={boxClass}>
        <details
          className='dropdown dropdown-right'
          open={isOpenWeek}
          onToggle={handleToggleWeek}
        >
          <summary className={summaryClass}>Week</summary>
          <ul className={listClass}>
            <li onClick={handleClick(setWeek, 'Week 1')}>
              <a>Week 1</a>
            </li>
            <li onClick={handleClick(setWeek, 'Week 2')}>
              <a>Week 2</a>
            </li>
            <li onClick={handleClick(setWeek, 'Week 3')}>
              <a>Week 3</a>
            </li>
          </ul>
        </details>
        <p className={choiceClass}>{Week}</p>
      </div>
      {/* Vocabulary Selector  */}
      <div className={boxClass}>
        <details
          className='dropdown dropdown-right'
          open={isOpenVocab}
          onToggle={handleToggleVocab}
        >
          <summary className={summaryClass}>Vocabulary</summary>
          <ul className={listClass}>
            <li onClick={handleClick(setVocab, 'Word 1')}>
              <a>Word 1</a>
            </li>
            <li onClick={handleClick(setVocab, 'Word 2')}>
              <a>Word 2</a>
            </li>
            <li onClick={handleClick(setVocab, 'Word 3')}>
              <a>Word 3</a>
            </li>
            <li onClick={handleClick(setVocab, 'Word 4')}>
              <a>Word 4</a>
            </li>
            <li onClick={handleClick(setVocab, 'Word 5')}>
              <a>Word 5</a>
            </li>
          </ul>
        </details>
        <p className={choiceClass}>{Vocab}</p>
      </div>
    </div>
  );
}

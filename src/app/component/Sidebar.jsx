import React from 'react';
import ButtonToggle from './ButtonToggle';
import MainInterface from './main-interface/MainInterface';

export default function Sidebar({
  isMenuOpen,
  toggleMenu,
  setDirection,
  setWeek,
  setVocab,
}) {
  const sidebarClasses = `fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-base-300 p-6 transition-transform duration-300 ease-in-out ${
    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
  } lg:translate-x-0`;

  const overlayClasses = `fixed inset-0 z-30 bg-base-200 opacity-50 lg:hidden ${
    isMenuOpen ? 'block' : 'hidden'
  }`;

  return (
    <div>
      <div className={sidebarClasses}>
        <ButtonToggle toggleFunction={toggleMenu} />
        <MainInterface
          setDirection={setDirection}
          setWeek={setWeek}
          setVocab={setVocab}
        />
      </div>

      <div className={overlayClasses} onClick={toggleMenu}></div>
    </div>
  );
}

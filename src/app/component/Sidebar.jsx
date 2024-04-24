'use client';
import { useState } from 'react';
import ButtonToggle from './ButtonToggle';
import MainInterface from './main-interface/MainInterface';

// Main Component
export default function Sidebar() {
  // State is managed within the component
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu's open state
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const sidebarClasses = `fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-base-300 p-6 transition-transform duration-300 ease-in-out ${
    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
  } lg:translate-x-0`;

  const overlayClasses = `fixed inset-0 z-30 bg-base-200 opacity-50 lg:hidden ${
    isMenuOpen ? 'block' : 'hidden'
  }`;

  return (
    <div>
      {/* Sidebar */}
      <div className={sidebarClasses}>
        <ButtonToggle isOpen={isMenuOpen} toggleFunction={toggleMenu} />
        <MainInterface />
      </div>

      {/* Overlay to close menu */}
      <div className={overlayClasses} onClick={() => setMenuOpen(false)}>
        {/* This overlay closes the menu when clicked. */}
      </div>

      {/* Main content area */}
      <div className='flex-1 min-h-screen p-6 lg:pl-72'>
        <ButtonToggle isOpen={!isMenuOpen} toggleFunction={toggleMenu} />
      </div>
    </div>
  );
}

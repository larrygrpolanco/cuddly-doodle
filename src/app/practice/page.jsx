'use client';

import Hints from '../component/hints/Hints';
import ChatInterface from '../component/chat-interface/ChatInterface';
import Sidebar from '../component/Sidebar';
import ButtonToggle from '../component/ButtonToggle';
import SmallCard from '../component/SmallCard';
import { useState } from 'react';

export default function Page() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className='flex min-h-screen'>
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className='flex flex-1 flex-row'>
        <div className='p-6 w-32 lg:w-64'>
          <ButtonToggle toggleFunction={toggleMenu} />
            <SmallCard />
        </div>
        <div className='flex-1 flex flex-col p-6 items-center justify-between'>
          <Hints />
          <div>
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  );
}

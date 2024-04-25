'use client';

import Hints from '../component/hints/Hints';
import ChatInterface from '../component/chat-interface/ChatInterface';
import Sidebar from '../component/Sidebar';

export default function Page() {
  return (
    <div className='flex min-h-screen'>
      <div>
        {/* Sidebar */}
        <Sidebar />
      </div>

      {/* Main content area, possibly needing some adjustment in styling to not overlap with Sidebar */}
      <div className='flex flex-1 flex-col'>
        <ChatInterface />
        <Hints />
      </div>
    </div>
  );
}

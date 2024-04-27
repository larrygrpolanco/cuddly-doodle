// Input Field: Located at the bottom of the chat area where users can type their queries.

import React from 'react'

const ChatInput = () => {
  return (
    <div>
      <input
        type='text'
        placeholder='Type here'
        class='input input-bordered w-full max-w-xs'
      />
    </div>
  );
}

export default ChatInput
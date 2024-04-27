// Chat Area: A large central panel where messages are displayed.

import React from 'react';

const ChatArea = () => {
  return (
    <div>
      <div class='chat chat-start'>
        <div class='chat-bubble'>
          It's over Anakin, <br />I have the high ground.
        </div>
      </div>
      <div class='chat chat-end'>
        <div class='chat-bubble'>You underestimate my power!</div>
      </div>
    </div>
  );
};

export default ChatArea;

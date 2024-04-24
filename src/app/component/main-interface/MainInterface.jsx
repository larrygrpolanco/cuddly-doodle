// Main Interface
// This is the primary screen where users interact with vocabulary and direction selectors and can access review and restart options.

// Components:

// Header: Includes the app title and a brief subtitle or description of the app’s purpose.
// Vocabulary Selector: Dropdown menu centrally positioned for prominence.
// Direction Selector: Dropdown menu next to the vocabulary selector.

// Action Buttons:
// Review Button: Positioned clearly for easy access, possibly beside the selectors to encourage use after selection.
// Restart Button: Smaller and perhaps styled differently to distinguish it from more frequently used controls.

// Layout:
// The vocabulary and direction selectors are at the top, as they are used first.
// Action buttons below or next to the selectors to guide the user logically through their interactions.
// Ensure ample spacing for touch targets if used on mobile devices.

import Selectors from './Selectors';
import Header from './Header';
import Buttons from './Buttons';
import ThemeController from './ThemeController';

export default function MainInterface() {
  return (
    <div>
      <div className='flex flex-col h-screen'>
        MainInterface
        <Header />
        <Selectors />
        <Buttons />
      </div>
      <div className='fixed bottom-5 left-0 w-full flex justify-center'>
        <ThemeController />
      </div>
    </div>
  );
}

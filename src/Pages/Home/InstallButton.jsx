import React from 'react';
import { triggerA2HS } from '../../a2hs'; // adjust path based on location

const InstallButton = () => {
  return (
    <button
      onClick={triggerA2HS}
      className="mt-0 mb-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700"
    >
      📲 Install this App
    </button>
  );
};

export default InstallButton;

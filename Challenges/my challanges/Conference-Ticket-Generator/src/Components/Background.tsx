import React from 'react';
import bgImage from '../Assets/images/background-desktop.png';

export function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-cover bg-center">
      <img src={bgImage} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

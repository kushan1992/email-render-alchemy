
import React from 'react';
import { Mail, Wand2 } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Mail className="h-8 w-8 text-white" />
              <Wand2 className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Email Alchemy</h1>
              <p className="text-sm text-white/70">Transform Figma to Email HTML</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white/70 text-sm">Design to Code Magic</span>
          </div>
        </div>
      </div>
    </header>
  );
};

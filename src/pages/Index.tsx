
import React from 'react';
import { EmailGenerator } from '@/components/EmailGenerator';
import { Header } from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      <EmailGenerator />
    </div>
  );
};

export default Index;

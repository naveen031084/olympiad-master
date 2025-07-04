import React from 'react';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import OliAI from './components/OliAI';

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Olympiad Master</h1>
      <Dashboard />
      <Quiz />
      <OliAI />
    </div>
  );
}

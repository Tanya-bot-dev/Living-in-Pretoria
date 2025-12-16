"use client";

import VoiceButton from '../components/VoiceButton';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-200 to-orange-400">
      <h1 className="text-5xl font-bold text-white drop-shadow-lg">
        Living in Pretoria 🏡
      </h1>
      <p className="text-white mt-2">Talk to find a home – anywhere in the world!</p>

      <VoiceButton />
    </main>
  );
}

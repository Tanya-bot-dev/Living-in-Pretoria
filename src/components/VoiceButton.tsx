"use client";
import { useState } from "react";

export default function VoiceButton() {
  const [isRecording, setIsRecording] = useState(false);

  async function startRecording() {
    try {
      // Ask for microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const media = new MediaRecorder(stream);
      setIsRecording(true);

      const chunks: BlobPart[] = [];

      // Collect audio data
      media.ondataavailable = (e) => chunks.push(e.data);

      // Handle stop event
      media.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        console.log("We have voice!", blob);
        setIsRecording(false);
      };

      media.start();

      // Stop after 3 seconds
      setTimeout(() => media.stop(), 3000);
    } catch (err) {
      console.error("Microphone access denied or error:", err);
      setIsRecording(false);
    }
  }

  return (
    <button
      onMouseDown={startRecording}
      className={`mt-6 px-6 py-3 rounded-full shadow-lg text-white ${
        isRecording ? "bg-red-500" : "bg-orange-500 hover:bg-orange-600"
      }`}
    >
      {isRecording ? "🔴 Listening..." : "🎤 Hold to talk"}
    </button>
  );
}



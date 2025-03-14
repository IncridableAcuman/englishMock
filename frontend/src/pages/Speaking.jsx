import React, { useState, useRef, useEffect } from "react";
import { Mic, StopCircle, Play, Send, Loader2, Timer, CheckCircle, XCircle } from "lucide-react";
import Sidebar from "../components/Sidebar";

const questions = [
  "Describe your favorite hobby.",
  "What are the advantages of learning a second language?",
  "Talk about a memorable trip you've had.",
];

const Speaking = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  useEffect(() => {
    if (isTimeRunning && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0) {
      stopRecording();
    }
  }, [timeLeft, isTimeRunning]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    audioChunksRef.current = [];
    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };
    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
      const audioURL = URL.createObjectURL(audioBlob);
      setAudioURL(audioURL);
    };
    mediaRecorderRef.current.start();
    setIsRecording(true);
    setIsTimeRunning(true);
    setTimeLeft(60);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
    setIsTimeRunning(false);
  };

  const sendForTranscription = async () => {
    if (!audioURL) return;
    setLoading(true);
    setTimeout(() => {
      setTranscript("This is a sample transcribed text from your speech.");
      setFeedback("Great job! Try to speak more clearly next time.");
      setLoading(false);
      setShowModal(true);
    }, 2000);
  };

  const getRandomQuestion = () => {
    setQuestion(questions[Math.floor(Math.random() * questions.length)]);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-semibold">Speaking Practice</h1>
          <button
            onClick={getRandomQuestion}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Get a Random Question
          </button>
          {question && (
            <p className="text-lg font-semibold text-gray-800 border p-4 rounded-lg bg-gray-100">{question}</p>
          )}
          <div className="flex flex-col items-center space-y-4 border p-6 rounded-xl shadow-lg">
            <p className="text-gray-700">Press the button to start speaking.</p>
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className="p-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              {isRecording ? <StopCircle size={32} /> : <Mic size={32} />}
            </button>
            {isRecording && <p className="text-red-500 font-bold">Time Left: {timeLeft}s</p>}
          </div>
          {audioURL && (
            <div className="flex flex-col items-center space-y-4 border p-6 rounded-xl shadow-lg">
              <p className="text-gray-700">Your Recorded Audio:</p>
              <audio controls className="w-full max-w-sm">
                <source src={audioURL} type="audio/wav" />
              </audio>
              <button
                onClick={sendForTranscription}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                <Send size={20} /> Transcribe Speech
              </button>
            </div>
          )}
          {loading && (
            <div className="flex justify-center items-center">
              <Loader2 className="animate-spin" size={32} />
            </div>
          )}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-semibold mb-2">Transcription:</h2>
                <p className="text-gray-700">{transcript}</p>
                <h3 className="text-lg font-semibold mt-4">Feedback:</h3>
                <p className="text-green-600 flex items-center gap-2">
                  <CheckCircle size={20} /> {feedback}
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Speaking;
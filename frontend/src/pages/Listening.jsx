import React, { useState } from "react";
import { Play, Upload, Send, Loader2, CheckCircle, XCircle } from "lucide-react";
import Sidebar from "../components/Sidebar";

const Listening = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([
    { question: "What is the main idea of the audio?", options: ["A", "B", "C", "D"], answer: "B" },
    { question: "What does the speaker mention about X?", options: ["True", "False"], answer: "True" },
  ]);
  const [userAnswers, setUserAnswers] = useState({});
  const [feedback, setFeedback] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setAudioFile(URL.createObjectURL(file));
  };

  const sendForTranscription = async () => {
    if (!audioFile) return;
    setLoading(true);
    setTimeout(() => {
      setTranscript("This is a sample transcribed text from the audio file.");
      setLoading(false);
      setShowModal(true);
    }, 2000);
  };

  const handleAnswerChange = (questionIndex, option) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: option });
  };

  const checkAnswers = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) correct++;
    });
    setFeedback(`You got ${correct} out of ${questions.length} correct!`);
    setShowModal(true);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-semibold">Listening Practice</h1>
          <div className="border p-6 rounded-xl shadow-lg">
            <label className="cursor-pointer bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
              <Upload size={20} className="inline-block mr-2" /> Upload Audio
              <input type="file" accept="audio/*" className="hidden" onChange={handleFileUpload} />
            </label>
            {audioFile && (
              <div className="mt-4">
                <audio controls className="w-full max-w-sm">
                  <source src={audioFile} type="audio/mp3" />
                </audio>
              </div>
            )}
          </div>
          {audioFile && (
            <button
              onClick={sendForTranscription}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              <Send size={20} /> Transcribe Audio
            </button>
          )}
          {loading && (
            <div className="flex justify-center items-center">
              <Loader2 className="animate-spin" size={32} />
            </div>
          )}
          {transcript && (
            <div className="border p-4 rounded-lg bg-gray-100">
              <h2 className="text-lg font-semibold">Transcription:</h2>
              <p>{transcript}</p>
            </div>
          )}
          <div className="border p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold">Answer the Questions</h2>
            {questions.map((q, index) => (
              <div key={index} className="mt-4">
                <p className="font-semibold">{q.question}</p>
                <div className="flex gap-4 mt-2">
                  {q.options.map((option) => (
                    <button
                      key={option}
                      className={`px-4 py-2 rounded-lg ${
                        userAnswers[index] === option ? "bg-blue-600 text-white" : "bg-gray-200"
                      } hover:bg-blue-700 transition`}
                      onClick={() => handleAnswerChange(index, option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button
              onClick={checkAnswers}
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Submit Answers
            </button>
          </div>
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-semibold mb-2">Feedback:</h2>
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

export default Listening;

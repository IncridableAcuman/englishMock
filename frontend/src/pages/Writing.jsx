import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Send, Loader2, Save, Download, Mic } from 'lucide-react';

const Writing = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    setWordCount(text.split(/\s+/).filter((word) => word.length > 0).length);
  }, [text]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const submitWriting = async () => {
    setLoading(true);
    setTimeout(() => {
      setFeedback('Great job! Try to use more complex sentence structures.');
      setLoading(false);
    }, 2000);
  };

  const saveDraft = () => {
    localStorage.setItem('writingDraft', text);
    alert('Draft saved successfully!');
  };

  const downloadText = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'writing_draft.txt';
    link.click();
  };

  const startRecording = () => {
    setIsRecording(true);
    // Placeholder for speech-to-text functionality
    setTimeout(() => {
      setIsRecording(false);
      setText(text + ' [Speech converted text]');
    }, 5000);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col p-6">
        <h1 className="text-2xl font-semibold">Writing Practice</h1>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-600">Word Count: {wordCount}</span>
          <span className="text-red-600">Time Left: {timeLeft}s</span>
        </div>
        <textarea
          className="w-full h-64 p-4 border rounded-lg mt-4"
          placeholder="Write your essay here..."
          value={text}
          onChange={handleTextChange}
        ></textarea>
        <div className="flex gap-3 mt-4">
          <button
            onClick={submitWriting}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <Send size={20} /> Submit
          </button>
          <button
            onClick={saveDraft}
            className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            <Save size={20} /> Save Draft
          </button>
          <button
            onClick={downloadText}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            <Download size={20} /> Download
          </button>
          <button
            onClick={startRecording}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${isRecording ? 'bg-red-600' : 'bg-purple-600'} text-white hover:opacity-80`}
          >
            <Mic size={20} /> {isRecording ? 'Recording...' : 'Start Speech'}
          </button>
        </div>
        {loading && (
          <div className="flex justify-center items-center mt-4">
            <Loader2 className="animate-spin" size={32} />
          </div>
        )}
        {feedback && (
          <div className="mt-4 p-4 bg-gray-100 border rounded-lg">
            <h2 className="text-lg font-semibold">Feedback:</h2>
            <p className="text-green-600">{feedback}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Writing;

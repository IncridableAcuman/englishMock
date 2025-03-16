import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Speaking = () => {
  // Savollar va qismlar
  const parts = [
    {
      title: "PART 1",
      questions: [
        { id: 1, text: "Tell me about your hometown.", keywords: ["hometown", "live", "place"] },
        { id: 2, text: "What do you like most about your hometown?", keywords: ["like", "favorite", "enjoy"] },
      ],
    },
    {
      title: "PART 2",
      questions: [
        { id: 3, text: "Describe a memorable holiday you had. You should say: where you went, who you went with, what you did, and why it was memorable.", keywords: ["holiday", "went", "with", "did", "memorable"] },
      ],
    },
  ];

  // Joriy qism va savol
  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [transcript, setTranscript] = useState('');
  const [score, setScore] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // Joriy qism va savolni olish
  const currentPart = parts[currentPartIndex];
  const currentQuestion = currentPart.questions[currentQuestionIndex];

  // Mikrofon ruxsatini olish va yozuvni boshlash
  useEffect(() => {
    if (isRecording) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          const mediaRecorder = new MediaRecorder(stream);
          mediaRecorderRef.current = mediaRecorder;

          mediaRecorder.ondataavailable = event => {
            audioChunksRef.current.push(event.data);
          };

          mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            setAudioURL(audioUrl);

            // Soddalashtirilgan speech-to-text (haqiqiy API uchun server kerak)
            const reader = new FileReader();
            reader.onload = () => {
              const arrayBuffer = reader.result;
              // Bu yerda haqiqiy speech-to-text API chaqirilishi kerak
              // Misol uchun, Web Speech API ishlatiladi (faqat Chrome da ishlaydi)
              const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
              recognition.lang = 'en-US';
              recognition.onresult = (event) => {
                const transcriptText = event.results[0][0].transcript;
                setTranscript(transcriptText);
                checkAnswer(transcriptText);
              };
              recognition.start();
            };
            reader.readAsArrayBuffer(audioBlob);
            audioChunksRef.current = [];
          };

          mediaRecorder.start();
        })
        .catch(err => console.error('Mikrofon ruxsati xatosi:', err));
    }

    return () => {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [isRecording]);

  // Javobni tekshirish
  const checkAnswer = (text) => {
    const keywords = currentQuestion.keywords;
    const matchedKeywords = keywords.filter(keyword => text.toLowerCase().includes(keyword.toLowerCase()));
    const scorePercentage = (matchedKeywords.length / keywords.length) * 100;
    setScore(Math.round(scorePercentage));
  };

  // Testni boshlash
  const handleStart = () => {
    setIsStarted(true);
    setIsRecording(true);
  };

  // Yozuvni to'xtatish va keyingi savolga o'tish
  const handleNextQuestion = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
    if (currentQuestionIndex < currentPart.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTranscript('');
      setScore(null);
      setIsRecording(true);
    } else if (currentPartIndex < parts.length - 1) {
      setCurrentPartIndex(currentPartIndex + 1);
      setCurrentQuestionIndex(0);
      setTranscript('');
      setScore(null);
      setIsRecording(true);
    } else {
      setIsModalOpen(true);
    }
  };

  // Modal oynani ochish/yopish
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto p-6">
      {/* Savollar palitrasi */}
      <div className="mb-4 flex justify-between items-center">
        <div className="flex space-x-4">
          {parts.map((part, partIndex) => (
            <div key={partIndex} className="flex space-x-2">
              <span className="font-semibold">{part.title}</span>
              {part.questions.map((_, qIndex) => (
                <span
                  key={qIndex}
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    partIndex === currentPartIndex && qIndex === currentQuestionIndex
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-300'
                  }`}
                >
                  {qIndex + 1}
                </span>
              ))}
            </div>
          ))}
        </div>
        <span className="text-gray-700">Microphone 1</span>
      </div>

      {/* Asosiy qism */}
      <div className="border-t border-orange-500 pt-4">
        {isStarted ? (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">{currentPart.title}</h2>
            <p className="text-gray-700 mb-4">
              Question {currentQuestionIndex + 1}: {currentQuestion.text}
            </p>
            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`px-4 py-2 rounded-full text-white ${
                isRecording ? 'bg-red-500' : 'bg-green-500'
              }`}
            >
              {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
            <button
              onClick={handleNextQuestion}
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
              disabled={!isRecording}
            >
              Next
            </button>
            {transcript && (
              <div className="mt-4">
                <p><strong>Transkript:</strong> {transcript}</p>
                {score !== null && <p><strong>Score:</strong> {score}%</p>}
              </div>
            )}
            {audioURL && <audio src={audioURL} controls className="mt-2" />}
          </div>
        ) : (
          <div className="text-center">
            <button
              onClick={handleStart}
              className="bg-green-500 text-white px-6 py-3 rounded-full text-lg"
            >
              BOSHLASH
            </button>
          </div>
        )}
      </div>

      {/* Pastki qism: Navigatsiya tugmalari */}
      <div className="flex justify-between items-center mt-6">
        <Link to="/" className="bg-orange-500 text-white px-4 py-2 rounded">
          Chiqish
        </Link>
        <button
          onClick={openModal}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Qayta topshirish
        </button>
      </div>

      {/* Modal oyna */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">SPEAKING testini topshirasizmi?</h3>
            <p className="text-gray-700 mb-2">
              Siz bir nechta savolga javob berishingiz kerak.
            </p>
            <p className="text-gray-700 mb-4">
              Buning uchun sizga 15 daqiqa vaqt beriladi.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="text-gray-500 hover:underline"
              >
                Bekor qilish
              </button>
              <Link
                to="/final"
                onClick={closeModal}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Topshirish
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Speaking;
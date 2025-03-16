import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Listening = () => {
  // Taymer uchun state
  const [timeLeft, setTimeLeft] = useState(3600); // 60:00 sekund
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal oyna holati
  const [answers, setAnswers] = useState({}); // Javoblarni saqlash

  // Taymer logikasi
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Komponent o'chirilganda taymerni tozalash
  }, []);

  // Vaqtni formatlash (mm:ss)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Savollar ro'yxati (6 qism, 35 ta savol)
  const parts = [
    {
      title: "Part 1: Questions 1-8",
      instruction: "You will hear some sentences. You will hear each sentence twice. Choose the correct reply to each sentence (A, B, or C). Mark your answers on the answer sheet.",
      questions: [
        { id: 1, text: "What a pity!", options: ["A) What a pity!", "B) I'm afraid not.", "C) Not bad, thank you."] },
        { id: 2, text: "I'd love to.", options: ["A) I'd love to.", "B) It's usually OK.", "C) We've got purple walls."] },
        { id: 3, text: "About two months.", options: ["A) About two months.", "B) It's quite long.", "C) Almost 30 kilometres."] },
        { id: 4, text: "I hope you'll feel better soon.", options: ["A) I hope you'll feel better soon.", "B) It hurts a lot.", "C) Have you got an appointment?"] },
        { id: 5, text: "How does he feel?", options: ["A) How does he feel?", "B) What's the matter with you?", "C) Who do you want?"] },
        { id: 6, text: "Sorry, can you say that again?", options: ["A) Sorry, can you say that again?", "B) I'm sorry, I'll call again later.", "C) I'm afraid I don't know."] },
        { id: 7, text: "He's my brother.", options: ["A) He's my brother.", "B) It's John's.", "C) I don't know it."] },
        { id: 8, text: "I stayed there a month.", options: ["A) I stayed there a month.", "B) For two weeks.", "C) At my friend's."] },
      ],
    },
    {
      title: "Part 2: Questions 9-14",
      instruction: "You will hear someone giving a talk. For each question, fill in the missing information in the numbered space. Write ONE WORD and/or A NUMBER for each answer.",
      questions: [
        { id: 9, text: "The main topic of the radio conversations is love stories that people had ___", input: true },
        { id: 10, text: "Alan feel himself ___ when talking to others.", input: true },
        { id: 11, text: "Alan and Susan had a new ___ when they had 4-month relationship.", input: true },
        { id: 12, text: "The reason why Kate used loveonline.com is the lack of ___", input: true },
        { id: 13, text: "The name of the third caller to the radio is ___", input: true },
        { id: 14, text: "Paulo had unhappy marriage with the girl he met online. Paulo saw the photo of his ___ on the newspaper.", input: true },
      ],
    },
    {
      title: "Part 3: Questions 15-18",
      instruction: "You will hear people speaking about different wild animals. Match each speaker (15-18) to the animals (A-F). There are TWO EXTRA animals which you do not need to use.",
      questions: [
        { id: 15, text: "Speaker 1", options: ["Tanlang", "Lion", "Tiger", "Elephant", "Giraffe", "Bear"] },
        { id: 16, text: "Speaker 2", options: ["Tanlang", "Lion", "Tiger", "Elephant", "Giraffe", "Bear"] },
        { id: 17, text: "Speaker 3", options: ["Tanlang", "Lion", "Tiger", "Elephant", "Giraffe", "Bear"] },
        { id: 18, text: "Speaker 4", options: ["Tanlang", "Lion", "Tiger", "Elephant", "Giraffe", "Bear"] },
      ],
    },
    {
      title: "Part 4: Questions 19-23",
      instruction: "You will hear someone giving a talk. Label the places (19-23) on the map (A-H). There are THREE extra options which you do not need to use. Mark your answers on the answer sheet.",
      questions: [
        { id: 19, text: "Recreation center", options: ["Tanlang", "A", "B", "C", "D", "E", "F", "G", "H"] },
        { id: 20, text: "Health center", options: ["Tanlang", "A", "B", "C", "D", "E", "F", "G", "H"] },
        { id: 21, text: "Swimming pool and sauna", options: ["Tanlang", "A", "B", "C", "D", "E", "F", "G", "H"] },
        { id: 22, text: "Health-food store", options: ["Tanlang", "A", "B", "C", "D", "E", "F", "G", "H"] },
        { id: 23, text: "Jenny’s Restaurant", options: ["Tanlang", "A", "B", "C", "D", "E", "F", "G", "H"] },
      ],
    },
    {
      title: "Part 5: Questions 24-29",
      instruction: "You will hear three extracts. Choose the correct answer (A, B, or C) for each question (24-29). There are TWO questions for each extract. Mark your answers on the answer sheet.",
      questions: [
        { id: 24, text: "One thing that attracted Emma to Malta was ...", options: ["A) the size of the island.", "B) the chance to learn a new language.", "C) the centuries-old buildings."] },
        { id: 25, text: "Studying in Malta reminded Emma of ...", options: ["A) her earlier education", "B) playing a game", "C) her usual university"] },
        { id: 26, text: "What does Ahmed say about last week’s seminar?", options: ["A) He wasn’t able to get there on time.", "B) He didn’t know all the students.", "C) He couldn’t understand everything."] },
        { id: 27, text: "What does the tutor say about Ahmed’s preparation for the seminar?", options: ["A) He was better prepared than some students.", "B) He completed some useful work.", "C) He read some useful articles."] },
        { id: 28, text: "How do people with positive idea about time try to remember good moments?", options: ["A) focusing on bad moments", "B) save items with sweet memories", "C) go to birthdays"] },
        { id: 29, text: "What kind of people think that their fate cannot be changed?", options: ["A) hedonistic", "B) negative thinker", "C) fatalistic"] },
      ],
    },
    {
      title: "Part 6: Questions 30-35",
      instruction: "You will hear a part of a lecture. For each question, fill in the missing information in the numbered space. Write NO MORE than ONE WORD for each answer.",
      questions: [
        { id: 30, text: "The gorilla come from Central ___", input: true },
        { id: 31, text: "This animal builds a nest on the ___", input: true },
        { id: 32, text: "Older males have ___", input: true },
        { id: 33, text: "Younger males are called black ___", input: true },
        { id: 34, text: "Plants provide the ___ they require.", input: true },
        { id: 35, text: "The gorillas are also suffering from unlawful ___", input: true },
      ],
    },
  ];

  // Javobni saqlash
  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  // Modal oynani ochish/yopish
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto p-6 flex">
      {/* Asosiy qism: Savollar */}
      <div className="w-3/4 pr-4">
        {/* Audio pleer */}
        <div className="mb-4">
          <audio controls className="w-full">
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Savollar */}
        {parts.map((part, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-bold mb-2">{part.title}</h2>
            <p className="text-gray-700 mb-4">{part.instruction}</p>
            {part.questions.map((question) => (
              <div key={question.id} className="mb-4">
                {question.options ? (
                  <div>
                    <p className="text-gray-700 mb-2">
                      <span className="bg-blue-500 text-white rounded-full h-6 w-6 inline-flex items-center justify-center mr-2">{question.id}</span>
                      {question.text}
                    </p>
                    {question.options.map((option, idx) => (
                      <label key={idx} className="block mb-1">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={option}
                          checked={answers[question.id] === option}
                          onChange={() => handleAnswerChange(question.id, option)}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-700 mb-2">
                    <span className="bg-blue-500 text-white rounded-full h-6 w-6 inline-flex items-center justify-center mr-2">{question.id}</span>
                    {question.text}
                    <input
                      type="text"
                      className="border-b w-20 p-1 ml-2"
                      value={answers[question.id] || ''}
                      onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                    />
                  </p>
                )}
              </div>
            ))}
            {index < parts.length - 1 && <hr className="my-4" />}
          </div>
        ))}

        {/* Pastki qism: Navigatsiya tugmalari */}
        <div className="flex justify-between items-center mt-6">
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Chiqish
          </button>
          <button onClick={openModal} className="bg-green-500 text-white px-4 py-2 rounded">
            Topshirish
          </button>
        </div>
      </div>

      {/* O'ng qism: Savollar palitrasi */}
      <div className="w-1/4 pl-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Question Palette</h3>
          <div className="flex justify-between mb-2">
            <span className="flex items-center">
              <span className="w-4 h-4 bg-blue-300 mr-1"></span> Answered
            </span>
            <span className="flex items-center">
              <span className="w-4 h-4 bg-gray-300 mr-1"></span> Unanswered
            </span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 35 }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                className={`p-2 rounded ${
                  answers[num] ? 'bg-blue-300' : 'bg-gray-300'
                } text-center`}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="text-center mt-4">
            <div className="text-lg font-semibold">{formatTime(timeLeft)}</div>
            <button onClick={openModal} className="bg-green-500 text-white px-4 py-2 rounded mt-2 w-full">
              Topshirish
            </button>
          </div>
        </div>
      </div>

      {/* Modal oyna */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">LISTENING testini topshirasizmi?</h3>
            <p className="text-gray-700 mb-2">
              Siz 35 ta savolga javob berishingiz kerak.
            </p>
            <p className="text-gray-700 mb-4">
              Buning uchun sizga 60 daqiqa vaqt beriladi.
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

export default Listening;
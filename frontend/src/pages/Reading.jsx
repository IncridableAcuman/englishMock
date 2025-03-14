import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { ScrollText, CheckCircle, XCircle } from "lucide-react";

const sampleTexts = [
  {
    title: "The Importance of Daily Reading",
    content:
      "Reading every day can improve vocabulary, enhance concentration, and reduce stress. Studies show that individuals who read regularly perform better in cognitive tasks.",
    questions: [
      {
        question: "What are the benefits of daily reading?",
        options: ["Improves vocabulary", "Increases stress", "Reduces focus"],
        correct: "Improves vocabulary",
      },
      {
        question: "How does reading impact cognitive tasks?",
        options: ["Negatively", "Positively", "No impact"],
        correct: "Positively",
      },
    ],
  },
  {
    title: "Climate Change and Its Effects",
    content:
      "Climate change has caused rising global temperatures, extreme weather events, and rising sea levels. It is important to take measures such as reducing carbon emissions to mitigate its impact.",
    questions: [
      {
        question: "What is a major effect of climate change?",
        options: ["Rising sea levels", "Lower temperatures", "More forests"],
        correct: "Rising sea levels",
      },
      {
        question: "How can we mitigate climate change?",
        options: ["Increase emissions", "Reduce carbon emissions", "Ignore it"],
        correct: "Reduce carbon emissions",
      },
    ],
  },
];

const Reading = () => {
  const [selectedText, setSelectedText] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [showResult, setShowResult] = useState(false);

  const selectText = (index) => {
    setSelectedText(sampleTexts[index]);
    setSelectedAnswer({});
    setShowResult(false);
  };

  const handleAnswer = (question, answer) => {
    setSelectedAnswer({ ...selectedAnswer, [question]: answer });
  };

  const checkAnswers = () => {
    setShowResult(true);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-semibold">Reading Practice</h1>
        <div className="space-y-2">
          {sampleTexts.map((text, index) => (
            <button
              key={index}
              onClick={() => selectText(index)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
            >
              <ScrollText size={20} /> {text.title}
            </button>
          ))}
        </div>
        {selectedText && (
          <div className="border p-4 rounded-lg bg-gray-100">
            <h2 className="text-xl font-semibold">{selectedText.title}</h2>
            <p className="text-gray-700 mt-2">{selectedText.content}</p>
            <div className="mt-4 space-y-4">
              {selectedText.questions.map((q, index) => (
                <div key={index} className="border p-4 rounded-lg bg-white">
                  <p className="text-gray-800 font-medium">{q.question}</p>
                  <div className="mt-2 space-y-2">
                    {q.options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(q.question, option)}
                        className={`px-4 py-2 rounded-lg w-full text-left border transition ${
                          selectedAnswer[q.question] === option
                            ? option === q.correct
                              ? "bg-green-200 border-green-600"
                              : "bg-red-200 border-red-600"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={checkAnswers}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Check Answers
            </button>
            {showResult && (
              <div className="mt-4 p-4 bg-gray-200 rounded-lg">
                {selectedText.questions.map((q, index) => (
                  <p
                    key={index}
                    className={`flex items-center gap-2 text-lg font-medium ${
                      selectedAnswer[q.question] === q.correct
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {selectedAnswer[q.question] === q.correct ? (
                      <CheckCircle size={20} />
                    ) : (
                      <XCircle size={20} />
                    )}
                    {q.question}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reading;

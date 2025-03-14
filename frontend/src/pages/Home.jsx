import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { BarChart, Target, ListChecks, Sun, Moon, MessageSquare, TrendingUp, Calendar, UserCheck, Trophy } from 'lucide-react';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState({ speaking: 70, writing: 50, reading: 80, listening: 60 });
  const [dailyTask, setDailyTask] = useState('Write a 200-word essay about your favorite hobby.');
  const [motivationalQuote, setMotivationalQuote] = useState('"Success is the sum of small efforts, repeated day in and day out."');
  const [userGoals, setUserGoals] = useState(['Finish a reading test', 'Practice speaking for 10 minutes']);
  const [schedule, setSchedule] = useState(['Listening Test - 10 AM', 'Speaking Practice - 3 PM']);
  const [leaderboard, setLeaderboard] = useState([
    { name: 'Alice', score: 1500 },
    { name: 'Bob', score: 1200 },
    { name: 'Charlie', score: 1000 }
  ]);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black';
  }, [darkMode]);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} className='text-white' />}
          </button>
        </div>

        {/* Progress Bars */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          {Object.entries(progress).map(([key, value]) => (
            <div key={key} className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
              <p className="capitalize font-semibold">{key} Progress</p>
              <div className="w-full bg-gray-300 rounded-full h-4 mt-2 overflow-hidden">
                <div className="bg-blue-600 h-4" style={{ width: `${value}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* User Goals */}
        <div className="mt-6 p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
          <h2 className="text-lg font-semibold flex items-center gap-2"><UserCheck size={20} /> Your Goals</h2>
          <ul className="mt-2 text-gray-700 dark:text-gray-300">
            {userGoals.map((goal, index) => <li key={index}>✔ {goal}</li>)}
          </ul>
        </div>

        {/* Schedule */}
        <div className="mt-4 p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
          <h2 className="text-lg font-semibold flex items-center gap-2"><Calendar size={20} /> Schedule</h2>
          <ul className="mt-2 text-gray-700 dark:text-gray-300">
            {schedule.map((event, index) => <li key={index}>📅 {event}</li>)}
          </ul>
        </div>

        {/* Daily Task & Motivational Quote */}
        <div className="mt-4 p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
          <h2 className="text-lg font-semibold flex items-center gap-2"><ListChecks size={20} /> Daily Task</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{dailyTask}</p>
        </div>

        <div className="mt-4 p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
          <h2 className="text-lg font-semibold flex items-center gap-2"><Target size={20} /> Motivational Quote</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{motivationalQuote}</p>
        </div>

        {/* Chatbot & Leaderboard */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center gap-2">
            <MessageSquare size={24} /> AI Chatbot Assistance
          </div>
          <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col gap-2">
            <h2 className="text-lg font-semibold flex items-center gap-2"><TrendingUp size={20} /> Leaderboard</h2>
            <ul>
              {leaderboard.map((user, index) => (
                <li key={index} className="flex justify-between">
                  <span>{index + 1}. {user.name}</span>
                  <span><Trophy size={16} className="text-yellow-500" /> {user.score}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
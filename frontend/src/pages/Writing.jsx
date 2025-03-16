import React from 'react';

const Writing = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Writing Section</h2>
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-2">Task</h3>
        <p className="text-gray-700">
          Write an essay (200-250 words) on the following topic: "The impact of technology on education." Include an introduction, body paragraphs, and a conclusion.
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Your Response</h3>
        <textarea className="w-full p-2 border rounded mb-4" rows="10" placeholder="Write your essay here..."></textarea>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">Submit Essay</button>
      </div>
    </div>
  );
};

export default Writing;
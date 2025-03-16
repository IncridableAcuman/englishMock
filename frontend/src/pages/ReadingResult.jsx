import React from 'react'
import { Link } from 'react-router-dom'

const ReadingResult = () => {
  return (
    <>
     <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Final Results</h2>
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-2">Your Test Summary</h3>
        <p className="text-gray-700">
          Congratulations! You have completed the mock test. Below are your results:
        </p>
        <div className="mt-4 space-y-2">
        <p><strong>Reading:</strong> 80%</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Next Steps</h3>
        <p className="text-gray-700 mb-4">
          Review your answers or take another test to improve your skills. Thank you for participating!
        </p>
        <div className="space-x-4">
          <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">Back to Home</Link>
          <Link to="/english" className="bg-green-500 text-white px-4 py-2 rounded">Take Another Test</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default ReadingResult
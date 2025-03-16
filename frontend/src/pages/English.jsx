import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const English = () => {
  const navigate=useNavigate();
  return (
    <>
     <main className="container mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">MULTILEVEL MOCK TESTS</h2>

      {/* Navigation Tabs */}
      <div className="flex border-b mb-4">
        <button className="px-4 py-2 bg-blue-200 text-blue-800 font-semibold">MOCK TEST MODULES</button>
        <Link to="/english/buying" className="px-4 py-2 text-gray-600 hover:bg-gray-200">SOTIB OLISH</Link>
        <Link to="/english/listening" className="px-4 py-2 text-gray-600 hover:bg-gray-200">LISTENING</Link>
        <Link to="/english/reading" className="px-4 py-2 text-gray-600 hover:bg-gray-200">READING</Link>
        <Link to="/english/writing" className="px-4 py-2 text-gray-600 hover:bg-gray-200">WRITING</Link>
        <Link to="/english/speaking" className="px-4 py-2 text-gray-600 hover:bg-gray-200">SPEAKING</Link>
        <button className="px-4 py-2 text-gray-600">TOPSHIRISH</button>
      </div>

      {/* Mock Test Cards */}
      <div className="space-y-6">
        {/* Mock Test 1 */}
        <div className="grid grid-cols-7 gap-4 items-center bg-white p-4 rounded-lg shadow">
          <div className="col-span-2">
            <p className="font-medium">MULTILEVEL Mock Test 1</p>
            <span className="text-green-500">✔</span>
          </div>
          <div className="text-center">
            <span className="block">LISTENING</span>
            <Link to="/english/listening" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded inline-block">Topshirish</Link>
            <p className="text-gray-600 mt-2">0%</p>
          </div>
          <div className="text-center">
            <span className="block">READING</span>
            <Link to="/english/reading" className="mt-2 bg-green-500 text-white px-4 py-2 rounded inline-block">Topshirish</Link>
            <p className="text-gray-600 mt-2">0%</p>
          </div>
          <div className="text-center">
            <span className="block">WRITING</span>
            <Link to="/english/writing" className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded inline-block">Topshirish</Link>
            <p className="text-gray-600 mt-2">0%</p>
          </div>
          <div className="text-center">
            <span className="block">SPEAKING</span>
            <Link to="/english/speaking" className="mt-2 bg-purple-500 text-white px-4 py-2 rounded inline-block">Topshirish</Link>
            <p className="text-gray-600 mt-2">0%</p>
          </div>
          <div className="text-center">
            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={()=>navigate("/english/final")}>Yakunlash</button>
          </div>
        </div>

        {/* Mock Test 2 */}
        <div className="grid grid-cols-7 gap-4 items-center bg-white p-4 rounded-lg shadow">
          <div className="col-span-2">
            <p className="font-medium">MULTILEVEL Mock Test 2</p>
            <button className="mt-2 bg-orange-500 text-white px-3 py-1 rounded text-sm">+1</button>
          </div>
          <div className="text-center">
            <span className="block">LISTENING</span>
            <Link to="/english/listening" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded inline-block">Topshirish</Link>
            <p className="text-gray-600 mt-2">0%</p>
          </div>
          <div className="text-center">
            <span className="block">READING</span>
            <Link to="/english/reading" className="mt-2 bg-green-500 text-white px-4 py-2 rounded inline-block">Topshirish</Link>
            <p className="text-gray-600 mt-2">0%</p>
          </div>
          <div className="text-center">
            <span className="block">WRITING</span>
            <Link to="/english/writing" className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded inline-block">Topshirish</Link>
            <p className="text-gray-600 mt-2">0%</p>
          </div>
          <div className="text-center">
            <span className="block">SPEAKING</span>
            <Link to="/english/speaking" className="mt-2 bg-purple-500 text-white px-4 py-2 rounded inline-block">Topshirish</Link>
            <p className="text-gray-600 mt-2">0%</p>
          </div>
          <div className="text-center">
            <button className="bg-green-500 text-white px-4 py-2 rounded">Topshirish</button>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default English
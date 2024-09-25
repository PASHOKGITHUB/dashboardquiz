import React from 'react';
import { Bell, Search, Share2, ChevronDown, Package2 } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#0a2351] text-white p-4 h-screen flex flex-col">
        <div className="mb-8 flex items-center">
          <div className="bg-white w-8 h-8 rounded mr-2"></div>
          <span className="text-xl font-bold">Logo</span>
        </div>
        <nav className="flex-grow">
          <button className="bg-white text-[#0a2351] w-full py-2 px-4 rounded flex items-center mb-4">
            <Package2 className="mr-2" size={20} /> Dashboard
          </button>
          <button className="w-full py-2 px-4 rounded flex items-center mb-4">
            <span className="mr-2">📚</span> Subject
          </button>
          <button className="w-full py-2 px-4 rounded flex items-center mb-4">
            <span className="mr-2">📝</span> Exam
          </button>
          <button className="w-full py-2 px-4 rounded flex items-center mb-4">
            <span className="mr-2">📊</span> Result
          </button>
          <button className="w-full py-2 px-4 rounded flex items-center mb-4">
            <span className="mr-2">👤</span> Profile
          </button>
        </nav>
        <button className="w-full bg-white text-[#0a2351] py-2 px-4 rounded flex items-center">
          <span className="mr-2">🚪</span> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative flex-grow mr-4">
            <input
              type="text"
              placeholder="Search employees by id or name"
              className="border rounded-full py-2 px-4 w-full max-w-md pl-10"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <div className="flex items-center space-x-4">
            <Bell size={24} className="text-gray-600" />
            <Share2 size={24} className="text-gray-600" />
          </div>
        </div>

        {/* Welcome Section */}
        <div className="flex items-start mb-8">
          <div className="flex-grow">
            <h1 className="text-2xl font-bold mb-2">Welcome Back, Tiana !</h1>
            <p className="text-gray-600">Your Students completed <span className="text-green-600 font-bold">80%</span> of the tasks.</p>
            <p className="text-gray-600">Progress is <span className="text-green-600 font-bold">very good</span> !</p>
          </div>
          <img src="/placeholder.svg" alt="Students" width={160} height={160} className="ml-8" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {['Exams', 'Batch', 'Students', 'Fail Rate'].map((title, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
              <h3 className="text-gray-500 mb-2">{title}</h3>
              <div className="flex items-end justify-between">
                <span className="text-3xl font-bold">
                  {index === 0 ? '7' : index === 1 ? '6' : index === 2 ? '230' : '26%'}
                </span>
                {index === 3 && (
                  <div className="w-16 h-8">
                    <svg className="w-full h-full" viewBox="0 0 100 40">
                      <path d="M0,20 C30,40 70,0 100,20" fill="none" stroke="#3b82f6" strokeWidth="2" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Attendance Chart */}
          <div className="col-span-2 bg-white rounded-lg shadow p-4">
            <h3 className="text-xl font-bold mb-4">Attendance</h3>
            <div className="h-48 relative">
              {['17pm', '16pm', '15pm', '14pm', '13pm', '12am', '11am'].map((time, index) => (
                <div key={time} className="absolute left-0 w-full" style={{ bottom: `${index * 14}%` }}>
                  <span className="text-xs text-gray-400">{time}</span>
                  <div className="border-b border-gray-200 w-full"></div>
                </div>
              ))}
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,80 C20,70 40,90 60,50 S80,30 100,20" fill="none" stroke="#ec4899" strokeWidth="2" />
                <circle cx="30" cy="80" r="2" fill="#ec4899" />
                <circle cx="70" cy="40" r="2" fill="#ec4899" />
              </svg>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <span key={day}>{day}</span>
              ))}
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Calendar</h3>
              <button className="bg-black text-white rounded px-3 py-1 flex items-center">
                2023 <ChevronDown size={16} className="ml-2" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
                <div key={day} className="text-xs font-semibold text-gray-500">{day}</div>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <div
                  key={i}
                  className={`p-2 text-sm ${i + 1 === 16 ? 'bg-blue-500 text-white rounded-full' : ''}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Batch Comparison */}
          <div className="col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Strongest NEET Batch</h3>
              {[
                { batch: 'I', score: 95, image: '/placeholder.svg' },
                { batch: 'II', score: 92, image: '/placeholder.svg' },
                { batch: 'III', score: 89, image: '/placeholder.svg' }
              ].map((batch, index) => (
                <div key={index} className="flex items-center mb-4">
                  <img src={batch.image} alt={`Batch ${batch.batch}`} width={48} height={48} className="rounded-lg mr-4" />
                  <div className="flex-grow">
                    <p className="font-semibold">Batch {batch.batch}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                      <div
                        className="bg-green-400 h-2 rounded-full"
                        style={{ width: `${batch.score}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600">{batch.score}% Avg Score</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Your NEET Batch</h3>
              {[
                { batch: 'I', correct: 74, image: '/placeholder.svg', color: 'bg-green-400' },
                { batch: 'II', correct: 52, image: '/placeholder.svg', color: 'bg-orange-400' },
                { batch: 'III', correct: 36, image: '/placeholder.svg', color: 'bg-red-400' }
              ].map((batch, index) => (
                <div key={index} className="flex items-center mb-4">
                  <img src={batch.image} alt={`Batch ${batch.batch}`} width={48} height={48} className="rounded-lg mr-4" />
                  <div className="flex-grow">
                    <p className="font-semibold">Batch {batch.batch}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                      <div
                        className={`${batch.color} h-2 rounded-full`}
                        style={{ width: `${batch.correct}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600">{batch.correct}% Correct</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exam List */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Today's Exam</h3>
              <a href="#" className="text-blue-500 text-sm">View All</a>
            </div>
            {[
              { color: 'bg-orange-100', image: '/placeholder.svg' },
              { color: 'bg-green-100', image: '/placeholder.svg' },
              { color: 'bg-purple-100', image: '/placeholder.svg' }
            ].map((exam, index) => (
              <div key={index} className={`flex items-center p-3 rounded-lg mb-3 ${exam.color}`}>
                <img src={exam.image} alt="Exam" width={40} height={40} className="rounded-full mr-4" />
                <div className="flex-grow">
                  <p className="font-semibold">Exam name</p>
                  <p className="text-sm text-gray-600">Batch 1</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">10:00 AM</p>
                  <p className="text-sm text-gray-600">40 mins</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <div className="w-64 p-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center mb-4">
            <img src="/placeholder.svg" alt="Tiana" width={64} height={64} className="rounded-full mr-4" />
            <div>
              <h3 className="font-bold text-lg">Tiana</h3>
              <p className="text-sm text-gray-600">JEE Coach</p>
            </div>
          </div>
          <p className="text-sm text-green-600 mb-1">Online</p>
          <p className="text-xs text-gray-500">Logged in Since 8:30 AM</p>
          <p className="text-xs text-gray-500">24 Sep 2024</p>
        </div>
      </div>
    </div>
  );
}
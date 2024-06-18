import React from "react";
import side_img from "../assets/side_img.webp"
import QuesTions from "./Ques";

function StartingPage() {
  return (
    <>

      <div className="h-6/6 mt-5 flex justify-around items-center">
        <div className="max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Select Options</h2>
          <div className="mb-4">
            {/* Question Type Selector */}

            <div className="mb-3">
              <label htmlFor="questionType" className="block text-gray-700 font-semibold mb-1">Question Type</label>
              <select id="questionType" className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                <option value="mcq">Multiple Choice Questions (MCQ)</option>
                <option value="tf">True/False</option>
                <option value="saq">Short Answer Questions (SAQ)</option>
              </select>
            </div>

            {/* Class Selector */}
            <div className="mb-3">
              <label htmlFor="class" className="block text-gray-700 font-semibold mb-1">Class</label>
              <select id="class" className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                <option value="class1">Class 1</option>
                <option value="class2">Class 2</option>
                <option value="class3">Class 3</option>
              </select>
            </div>

            {/* Subject Selector */}
            <div className="mb-3">
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-1">Subject</label>
              <select id="subject" className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                <option value="math">Mathematics</option>
                <option value="science">Science</option>
                <option value="history">History</option>
                <option value="english">English</option>
                {/* Add more subject options as needed */}
              </select>
            </div>

            {/* Lesson Selector */}
            <div className="mb-3">
              <label htmlFor="lesson" className="block text-gray-700 font-semibold mb-1">Lesson</label>
              <select id="lesson" className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                <option value="lesson1">Lesson 1</option>
                <option value="lesson2">Lesson 2</option>
                <option value="lesson3">Lesson 3</option>
                {/* Add more lesson options as needed */}
              </select>
            </div>

            {/* Topic Selector */}
            <div className="mb-3">
              <label htmlFor="topic" className="block text-gray-700 font-semibold mb-1">Topic</label>
              <select id="topic" className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                <option value="topic1">Topic 1</option>
                <option value="topic2">Topic 2</option>
                <option value="topic3">Topic 3</option>
                {/* Add more topic options as needed */}
              </select>
            </div>

          </div>
          {/* Start Button */}
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Start</button>
        </div>


        <div className="hidden lg:block">
          <img src={side_img}
            alt="user photo" />
        </div>

      </div>

    </>
  );
}

export default StartingPage;

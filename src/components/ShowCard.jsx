import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SummaryApi from '../common';

const ShowCard = ({ d, index }) => {
  console.log("ddddddddddddddddddddddd",d)
  const [selectedAnswers, setSelectedAnswers] = useState(Array(10).fill(null));

  const handleSubmit = async (ANS) => {

    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[index] = ANS;
    setSelectedAnswers(updatedAnswers)

    const questionData = {
      questionId: d._id,
      updatedAnswer: ANS
    }

    await fetch(SummaryApi.answer.url, {
      method: SummaryApi.answer.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(questionData),
    })
  }



  return (
    <div key={d.id} className="flex justify-between items-center bg-gray-100 rounded-lg p-4 shadow-sm ">
      <div className="text-gray-700 font-medium">
        {d.question}
      </div>
      <div className="flex space-x-2 m-2">
        <button onClick={() => handleSubmit(`${d.options[0]}`)} className={`bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-800 transition duration-200 ${selectedAnswers[index] === `${d.options[0]}` ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`}>
          {d.options[0]}
        </button>
        <button onClick={() => handleSubmit(`${d.options[1]}`)} className={`bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-800 transition duration-200 ${selectedAnswers[index] === `${d.options[1]}` ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`}>
          {d.options[1]}
        </button>
      </div>
    </div>


  )
}

export default ShowCard
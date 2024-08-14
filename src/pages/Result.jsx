import React, { useState } from 'react'
import SummaryApi from '../common'
import { useParams, useLocation } from 'react-router-dom'
import game from "../assets/game.jpg"
import { LuTrophy } from "react-icons/lu";
import tendo from "../assets/tendo.png"

const Result = () => {

  const params = useParams()
  const location = useLocation()
  const { timeTakenForQuestion } = location.state || {}
  const [leaderBoard, setLeaderBoard] = useState([]);
  const [eventCompleted, setEventCompleted] = useState(true);
  const [resultButton, setResultButton] = useState(false)

  const handleSubmit = async () => {
    setResultButton(true)
    const data = {
      userId: params?.id
    }
    const dataResponse = await fetch(SummaryApi.result.url, {
      method: SummaryApi.result.method,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })

    const dataApi = await dataResponse.json()

    console.log(dataApi.data)

    const fetchLeaderboard = async () => {
      const response = await fetch(SummaryApi.board.url);
      const dataResponse = await response.json();
      setLeaderBoard(dataResponse.data);
      console.log(dataResponse.data);
    };

    fetchLeaderboard();
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-700 via-purple-800 to-blue-900 flex flex-col items-center py-10 fixed inset-0 z-50">
      {/* Blurred and Semi-Transparent Background Image */}
      <img
        src={game}
        alt=""
        className="absolute inset-0 w-full h-full object-cover filter blur-xl opacity-80 z-0"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-xl rounded-lg bg-white bg-opacity-80 shadow-2xl p-10 backdrop-filter backdrop-blur-md">
        {
          (!resultButton) && eventCompleted && (
            <div>
              <p className='text-4xl font-extrabold text-red-600 text-center mb-6'>Quiz Completed</p>
              <p className='text-2xl font-semibold text-gray-500 text-center'>You Took {timeTakenForQuestion} seconds</p>
              {/*  <button 
                // onClick={handleSubmit}
                // className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300">
                // Get Results
              // </button> */}
            </div>

          )
        }

        {/* Leaderboard */}
        {resultButton && eventCompleted && leaderBoard.length > 0 && (
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
            <div className='flex justify-center items-center mb-8'>
              <img src={tendo} alt="" className="w-20 h-20 object-contain" />
            </div>
            <h1 className='text-4xl font-extrabold text-red-600 text-center mb-6'>GAME OVER</h1>
            <div className='flex justify-center items-center mb-5'>
              <h2 className="text-2xl font-bold text-yellow-500 text-center">
                Leaderboard
              </h2>
              <div className='text-4xl ml-4 text-yellow-500'>
                <LuTrophy />
              </div>
            </div>
            <ul className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400">
              {leaderBoard.map((user, index) => (
                <div className='m-4' key={index}>
                  <li className="flex justify-between text-lg mb-2">
                    <span className="font-bold text-gray-800">{index + 1}. {user.name}</span>
                    <span className="text-gray-600">
                      {user.score} points in {user.totalTime} seconds
                    </span>
                  </li>
                  <hr className="border-gray-300" />
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Result
import React, { useEffect, useState } from 'react'
import game from '../assets/game.jpg'
import { LuTrophy } from "react-icons/lu";
import tendo from "../assets/tendo.png"
import ShowCard from '../components/ShowCard';
import SummaryApi from '../common';

const Answer = () => {
    const[data,setData] = useState([])
    const[leaderBoard , setLeaderBoard] = useState([])

    const fetchAllEvents = async () => {
        const response = await fetch(SummaryApi.fetchData.url);
        const dataResponse = await response.json();
        setData(dataResponse.data);
        console.log(dataResponse.data);
      };
    
      useEffect(() => {
        fetchAllEvents();
      }, []);

      const handleResult = async()=>{
        const dataResponse = await fetch(SummaryApi.result.url, {
            method: SummaryApi.result.method,
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(data)
          })
      
          const dataApi = await dataResponse.json()

          
        const fetchLeaderboard = async () => {
            const response = await fetch(SummaryApi.board.url);
            const dataResponse = await response.json();
            setLeaderBoard(dataResponse.data);
            console.log(dataResponse.data);
          };

          fetchLeaderboard()
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
    {data.length > 0 && leaderBoard.length == 0 && (
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
        {/* Logo/Image */}
        <div className="flex justify-center items-center">
          <img src={tendo} alt="" className="w-24 h-24 object-contain"/>
        </div>
        <div className='max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400'>
        {
            data.map((d,index)=>(
                    <ShowCard d = {d} index = {index}/>
            ))
        }
        </div>
        <div className='flex justify-center items-center m-2'>
    <button onClick={handleResult} className='bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-800 transition duration-200'>GET RESULTS</button>
  </div>
      </div>
      
    )}



    {/* Leaderboard */}
    {leaderBoard.length > 0 && (
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
        <div className='flex justify-center items-center mb-8'>
          <img src={tendo} alt="" className="w-20 h-20 object-contain"/>
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

export default Answer
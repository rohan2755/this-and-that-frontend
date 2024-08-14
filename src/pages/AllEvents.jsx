// import React, { useEffect, useState } from 'react'
// import ShowCard from '../components/ShowCard'
// import SummaryApi from '../common';
// import { Link, useNavigate } from 'react-router-dom';

// const AllEvents = () => {
//   const [data, setData] = useState([]);
//   const [index, setIndex] = useState(0);
//   const [timeTaken, setTimeTaken] = useState(0);
//   const [startTime, setStartTime] = useState(Date.now());
//   const [userAns, setUserAns] = useState("");
//   const [score, setScore] = useState(0);
//   const [r,setR] = useState(0);
//   const [leaderBoard, setLeaderBoard] = useState([])
//   const [submit, setSubmit] = useState(false);

//   const navigate = useNavigate()

//   const ans = "";

//   const fetchAllEvents = async () => {
//     const response = await fetch(SummaryApi.fetchData.url)
//     const dataResponse = await response.json()
//     setData(dataResponse.data)
//     console.log(dataResponse.data)
//   }

// const fetchUser = async () => {
//   const response = await fetch(SummaryApi.fetchUser.url)
//   const dataResponse = await response.json()
//   setData(dataResponse.data)
//   console.log(dataResponse.data)
// }

// useEffect(() => {
// fetchAllEvents();
//   // fetchUser()
// }, [])

// useEffect(() => {
//   if (index === 0) {
//     setStartTime(Date.now());
//   }

// }, [index]);

// const handleNextQuestion = async (isCorrect) => {
// setUserAns(e.target.value)
// const ans = userAns

//   const score = isCorrect ? 1 : 0;
//   if(isCorrect){
//     setR(r+1)
//   }else{
//     setR(r);
//   }
//   console.log("total Score = ",r+score)
//   console.log("start time = ",startTime)
//   console.log("in handle next question")
//   console.log(localStorage.getItem('userid'))
//   if(index >= data.length-1){
//     const endTime = Date.now();
//     console.log("end Time = ",endTime)
//     const timeTakenForQuestion = (endTime - startTime) / 1000;

//     console.log("timeTakenForQuestion", timeTakenForQuestion)

//     const userData = {
//       userId: localStorage.getItem('userid'),
//       timeTaken: timeTakenForQuestion,
//       score: r+score,
//     }

//     const dataResponse = await fetch(SummaryApi.submit.url, {
//       method: SummaryApi.submit.method,
//       headers: {
//         "content-type": "application/json"
//       },
//       body: JSON.stringify(userData)
//     })
//   }



//   console.log("userAns = ", ans, " correctAns = ", data[index].correctAns,)
//   if (ans === data[index].correctAns) {

//     setScore(score + 1)
//     console.log("Score", score);
//   }
//   else {
//     setScore(score + 0);
//     console.log("Score", score);
//   }

//   // const response = await fetch(SummaryApi.submit.url,{
//   //   method : SummaryApi.sumbit.method,
//   //         headers : {
//   //             "content-type" : "application/json"
//   //         },
//   //         body : JSON.stringify(data)
//   // })
//   // const dataResponse = await response.json()
//   // setData(dataResponse.data)
//   // console.log(dataResponse.data)



//   setIndex(index + 1);
// };

// const fetchLeaderboard = async () => {
//   const response = await fetch(SummaryApi.board.url)
//   const dataResponse = await response.json()
//   setLeaderBoard(dataResponse.data)
//   console.log(dataResponse.data)
// }

// return (
//   <>
{/* <div className=''>
        <p className='text-2xl font-semibold'>All Events</p>
      </div>
      <div className='flex flex-col items-center justify-center px-6 mx-auto'>
        {
          data.length > 0 && (
            <a href="#" class="block max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

              <h5 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{data[index].question}</h5> */}
{/* <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */ }
{/* <button onClick={()=>handleNextQuestion("Yes" === data[index].correctAns)} value={'Yes'} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Yes</button>
              <button onClick={()=>handleNextQuestion("No" === data[index].correctAns)} value={'No'} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>No</button>
              
            </a>
          )
        }
        {
          index >= data.length && (
            <button
          onClick={fetchLeaderboard}
          className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800'
        >
          Finish Quiz
        </button>
          )
        }
      </div> */}

{/* {
        data.length > 0 && index < data.length && (
          <div className='flex justify-center items-center mt-10 mb-10'>
            <div className='flex flex-col items-center justify-center w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
              <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center justify-center p-6 space-y-4 md:space-y-6 sm:p-8">
                  <div>
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      {data[index].question}
                    </h1>
                  </div>

                  <div className='flex mt-5'>
                    <div>
                      <button onClick={() => handleNextQuestion("Yes" === data[index].correctAns)} value={'Yes'} className='text-white m-3 mr-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium shadow-xl rounded-full text-lm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Yes</button>
                    </div>
                    <div>
                      <button onClick={() => handleNextQuestion("No" === data[index].correctAns)} value={'No'} className='text-white m-3 ml-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium shadow-xl rounded-full text-lm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>No</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      {
        index >= data.length && (
          <div className='flex justify-center items-center mt-10 mb-10'>
            <div className='flex justify-center items-center w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
              <button
                onClick={fetchLeaderboard}
                className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800'
              >
                Finish Quiz
              </button>
            </div>
          </div>
        )
      }
      {
        leaderBoard.length > 0 && (
          <div className='flex flex-col justify-center items-center mt-10'>
            <div className='flex flex-col justify-center items-center w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div>
            <h1 className='text-2xl text-red-700'>Game Over</h1>
            </div>
            <div>
            <h2 className='text-2xl text-gray-700'>Leaderboard</h2>
            </div>
            <ul>
              {leaderBoard.map((user, index) => (
                <div className='m-2'>
                  <li className='font-semibold text-xl' key={index}>{user.name}: {user.score} points in {user.totalTime} seconds</li>
                </div>
              ))}
            </ul>
          </div>
          </div>
          
        )
      }

    </>
  )
}

export default AllEvents */}

import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import { useNavigate } from 'react-router-dom';
import { LuTrophy } from "react-icons/lu";
import tendo from "../assets/tendo.png"
import game from "../assets/game.jpg"


import { IoMdClose } from 'react-icons/io';



const AllEvents = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [r, setR] = useState(0);
  const [ans , setAns] = useState("")
  const [leaderBoard, setLeaderBoard] = useState([]);

  const navigate = useNavigate();


  const fetchAllEvents = async () => {
    const response = await fetch(SummaryApi.fetchData.url);
    const dataResponse = await response.json();
    setData(dataResponse.data);
    console.log(dataResponse.data);
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  useEffect(() => {
    if (index === 0) {
      setStartTime(Date.now());
    }
  }, [index]);

  const handleNextQuestion = async (ANS) => {
    // const newScore = isCorrect ? r + 1 : r;
    console.log("questionId ", data[index]._id)
    
    console.log("index ", index)
    console.log("data length ", data.length)

    setAns(ANS);
    console.log("ans", ANS)
    if (index == data.length - 1) {
      // const newScore = isCorrect ? r + 1 : r;
      const endTime = Date.now();
      const timeTakenForQuestion = (endTime - startTime) / 1000;

      const userData = {
        userId: localStorage.getItem('userid'),
        timeTaken: timeTakenForQuestion,
        ans: ANS,
        questionId : data[index]._id
      };

        await fetch(SummaryApi.submit.url, {
        method: SummaryApi.submit.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // const data = await response.json()
    //   if (!response.ok) {
    //     // Show error toast
    //     toast.error(data.message);
    //     // Navigate to the "Already Answered" page
    //     navigate('/already-answered');
    //     return;
    // }
      setIndex(index + 1);
      navigate('result/'+localStorage.getItem('userid'),{state : {timeTakenForQuestion}})
      // setR(newScore);
      // fetchLeaderboard();
    }else {
      const endTime = Date.now();
      const timeTakenForQuestion = (endTime - startTime) / 1000;

      const userData = {
        userId: localStorage.getItem('userid'),
        timeTaken: timeTakenForQuestion,
        ans: ANS,
        questionId : data[index]._id
      };

        await fetch(SummaryApi.submit.url, {
        method: SummaryApi.submit.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      // const data = await response.json()
      // if (!response.ok) {
      //   // Show error toast
      //   toast.error(data.message);
      //   // Navigate to the "Already Answered" page
      //   navigate('/already-answered');
      //   return;
    // }
      setIndex(index + 1);
    // } else {
      setR(newScore);
      // setIndex(index + 1);
    // }
    }
      
  };

  const fetchLeaderboard = async () => {
    const response = await fetch(SummaryApi.board.url);
    const dataResponse = await response.json();
    setLeaderBoard(dataResponse.data);
    console.log(dataResponse.data);
  };

  return (
    // <div className="min-h-screen bg-pink-950 flex flex-col items-center py-10 fixed top-0 bottom-0 left-0 right-0 w-full h-full z-1000 justify-between bg-white-800 bg-opacity-50 ">
    //   <img src={game} alt=""  className='absolute top-0 left-0 w-full h-full object-cover z-0 filter blur-lg opacity-90'/>
    //   <div className='relative z-10 w-full max-w-xl rounded-lg p-8'>
    //   {data.length > 0 && index < data.length && (
    //     <div className=" w-full max-w-lg bg-white rounded-lg shadow-lg p-8 z=10 ">
    //       <div className='flex justify-center items-center mt-2 mb-10'>
    //     <img src={tendo} alt="" />
    //   </div>
    //       <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
    //         {data[index].question}
    //       </h1>
    //       <div className="flex justify-between">
    //         <button
    //           onClick={() => handleNextQuestion("Yes" === data[index].correctAns)}
    //           className="bg-blue-300 hover:bg-blue-500 text-blue-900 font-semibold py-2 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105"
    //         >
    //           Yes
    //         </button>
    //         <button
    //           onClick={() => handleNextQuestion("No" === data[index].correctAns)}
    //           className="bg-red-400 hover:bg-red-500 text-red-800 font-semibold py-2 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105"
    //         >
    //           No
    //         </button>
    //       </div>
    //     </div>
    //   )}
    //   {/* {index >= data.length - 1 && (
    //     <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 mt-10">
    //       <button
    //         onClick={fetchLeaderboard}
    //         className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg w-full transform transition-transform hover:scale-105"
    //       >
    //         Finish Quiz
    //       </button>
    //     </div>
    //   )} */}
    //   {leaderBoard.length > 0 && (
    //     <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 mt-10">
    //       <div className='flex justify-center items-center mt-2 mb-10'>
    //     <img src={tendo} alt="" />
    //   </div>
    //       <h1 className='text-4xl font-bold text-red-700 text-center mb-6'>GAME OVER</h1>
    //       <div className='flex justify-center items-center mb-5'>
    //         <div>
    //           <h2 className="text-2xl font-bold text-yellow-500 text-center ml-3">
    //             Leaderboard
    //           </h2>
    //         </div>
    //         <div className='text-3xl ml-5'>
    //           <LuTrophy />

    //         </div>

    //       </div>
    //       <ul>
    //         {leaderBoard.map((user, index) => (
    //           <div className='m-2'>
    //             <li key={index} className="flex justify-between text-lg mb-2">
    //             <span className="font-bold text-gray-800">{index+1}. {user.name}</span>
    //             <span className="text-gray-600">
    //               {user.score} points in {user.totalTime} seconds
    //             </span>
    //           </li>
    //           <hr />
    //           </div>
    //         ))}
    //       </ul>
    //     </div>
    //   )}
    //   </div>
    // </div>




    <div className="min-h-screen bg-gradient-to-br from-pink-700 via-purple-800 to-blue-900 flex flex-col items-center py-10 fixed inset-0 z-50">
  {/* Blurred and Semi-Transparent Background Image */}
  <img 
    src={game} 
    alt=""  
    className="absolute inset-0 w-full h-full object-cover filter blur-xl opacity-80 z-0" 
  />

  {/* Content Container */}
  <div className="relative z-10 w-full max-w-xl rounded-lg bg-white bg-opacity-80 shadow-2xl p-10 backdrop-filter backdrop-blur-md">
    {data.length > 0 && index < data.length && (
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
        {/* Logo/Image */}
        <div className="flex justify-center items-center">
          <img src={tendo} alt="" className="w-24 h-24 object-contain"/>
        </div>

        {/* Question */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          {data[index].question}
        </h1>

        {/* Buttons */}
        <div className="flex justify-around mt-4">
          <button
            onClick={() => handleNextQuestion("Yes")}
            className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-8 rounded-full shadow-lg transform transition-transform hover:scale-105"
          >
            Yes
          </button>
          <button
            onClick={() => handleNextQuestion("No")}
            className="bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-8 rounded-full shadow-lg transform transition-transform hover:scale-105"
          >
            No
          </button>
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


  );
}


export default AllEvents;
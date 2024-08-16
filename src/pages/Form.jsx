import React, { useEffect, useState } from 'react'
import tendo from "../assets/tendo.png"
import game from '../assets/game.jpg'
import SummaryApi from '../common'

const Form = () => {
    const[data,setData] = useState([])

    const fetchAllEvents = async () => {
        const response = await fetch(SummaryApi.fetchData.url);
        const dataResponse = await response.json();
        setData(dataResponse.data);
        console.log(dataResponse.data);
      };
    
      useEffect(() => {
        fetchAllEvents();
      }, []);

      const handleQuestionChange = (index, newQuestion) => {
        const updatedQuestions = data.map((item, i) => 
            i === index ? { ...item, question: newQuestion } : item
        );
        setData(updatedQuestions);
    };
    
    const handleOptionChange = (index, optionIndex, newOption) => {
      console.log("data length",data.length)
        const updatedQuestions = data.map((item, i) => 
            i === index ? { 
                ...item, 
                options: item.options.map((option, j) => 
                    j === optionIndex ? newOption : option
                ) 
            } : item
        );
        setData(updatedQuestions);
    };
    // const handleOptionChange = (questionIndex, optionIndex, newOption) => {
    //   console.log('Before update:', JSON.stringify(data));
    //   console.log("data length" , data.length)
  
    //   const updatedQuestions = data.map((item, i) => {
    //       if (i === questionIndex && i < data.length) {
    //           const options = [...item.options];
    //           if (options[optionIndex] !== undefined) {
    //               options[optionIndex] = newOption;
    //           }
    //           return { ...item, options };
    //       }
    //       return item;
    //   });
  
      // setData(updatedQuestions);
      // console.log('After update:', JSON.stringify(updatedQuestions));
  // };

      const handleSubmit = async() =>{
        const dataResponse = await fetch(SummaryApi.form.url, {
          method: SummaryApi.form.method,
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            data : 
              data
            
          })
        })
    
        const dataApi = await dataResponse.json()
        console.log(data)
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
    {data.length > 0 && (
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
        {/* Logo/Image */}
        <div className="flex justify-center items-center">
          <img src={tendo} alt="" className="w-24 h-24 object-contain"/>
        </div>
        <div className='max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400'>
        {
            data.map((d,index)=>(
              <div key={d.id} className="mb-6">
              <label className="block text-lg font-semibold mb-2">
                Question {index + 1}:
              </label>
              <input
                type="text"
                value={d.question}
                onChange={(e) => handleQuestionChange(index, e.target.value)}
                className="border p-2 mb-4 w-full"
              />
              <div key={index} className="mb-2">
                <label className="block">Option A:</label>
                <input
                  type="text"
                  value={d.options[0]}
                  onChange={(e) => handleOptionChange(index,0, e.target.value)}
                  className="border p-2 w-full"
                />
                <label className="block">Option B:</label>
                <input
                  type="text"
                  value={d.options[1]}
                  onChange={(e) => handleOptionChange(index,1, e.target.value)}
                  className="border p-2 w-full"
                />
              </div>
              </div>
            ))
        }
        </div>
        <div className='flex justify-center items-center m-2'>
    <button onClick={handleSubmit} className='bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-800 transition duration-200'>Submit</button>
  </div>
      </div>
      
    )}
  </div>
  

 
</div>
  )
}

export default Form
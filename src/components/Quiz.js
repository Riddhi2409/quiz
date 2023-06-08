import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import questions from '../data/ques'

const Quiz = () => {
    const [quesNo,setQuesNo]=useState(0);
    const [isDisabled,setIsDisabled]=useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [ansList,setAnsList]=useState([]);
    const [timeLeft,setTimeLeft]=useState(90);

    const navigate=useNavigate();

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value)
      setIsDisabled(false)
      setAnsList(prev=>{
        prev[quesNo]=event.target.value;
        return [...prev];
      })
    }

    const handleNext =()=>{
      setQuesNo(prev=>{return prev+1})
      setIsDisabled(true)
    }

    const handleBack = () => {
      setQuesNo(prev=>{return prev-1})
    }
    
    const handleSubmit = () =>{
      navigate('/score',{replace: true,state: ansList});
    }

    useEffect(()=>{
      const interval=setInterval(()=>{
        setTimeLeft((prev)=>prev-1);
      },1000);
      return ()=>{
        clearInterval(interval)
      }
    },[timeLeft])

    if (timeLeft<=0){
      handleSubmit();
    }


    useEffect(()=>{
      setIsDisabled(!ansList[quesNo])
    },[quesNo,ansList])
  return (
    <div className='flex flex-col gap-10 mt-20 flex-wrap'>
        <div className='mx-auto sm:w-[35em] w-[20em] text-white bg-zinc-900  rounded-xl bg-gray-800 p-10 flex flex-col h-[17em]'>

            <div className='ml-4'>
              <h3>Time: {timeLeft} sec</h3>
              <h3>{questions[quesNo].ques}</h3>
              <div className='mt-4'>
                {questions[quesNo].options.map((q)=>(
                  <div key={q}>
                    <label >
                    <input  type="radio" 
                      value={q} 
                      name={quesNo}
                      checked={selectedOption===q || ansList[quesNo]===q}
                      onChange={handleOptionChange}/>{q}
                    </label>
                    </div>
                ))}
              </div>
              <div className='flex justify-center items-center gap-8 mt-8'>
                <button type='button' className={`text-sm  p-2 rounded-md border-slate-600 border-2 bg-zinc-700 ${quesNo===0 ?"opacity-50 cursor-not-allowed" : "hover:bg-black"}`} disabled={quesNo===0} onClick={handleBack}>Back</button>

                {quesNo===2? (<button type='button' className={`text-sm  p-2 rounded-md border-slate-600 border-2 bg-zinc-700 ${isDisabled ?"opacity-50 cursor-not-allowed" : "hover:bg-black"}`} disabled={isDisabled} onClick={handleSubmit}>Submit</button>):
                  (<button type='button' className={`text-sm  p-2 rounded-md border-slate-600 border-2 bg-zinc-700 ${isDisabled ?"opacity-50 cursor-not-allowed" : "hover:bg-black"}`} disabled={isDisabled} onClick={handleNext}>Next</button>
                  )}

              </div>
            </div>
        </div>
        <div className='mx-auto sm:w-[35em] w-[20em] text-white bg-zinc-900  rounded-xl bg-gray-800 p-10 flex flex-col h-[15em]'>
            <h1 className='text-xl font-bold'>Review Answer</h1>
            <div className='mt-4 flex flex-col items-center justify-center gap-4'>
              {ansList.map((ans,index)=>(
                <div key={ans} className='border-zinc-800 border-2 sm:w-[30em] w-[10em] bg-zinc-900 flex items-center justify-center hover:bg-gray-700'
                onClick={()=>{setQuesNo(index);setIsDisabled(false)}}
               >
                  <p>{`#${index+1} ${ans}`}</p>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Quiz

import React from 'react'
import questions from '../data/ques'
import { useLocation,useNavigate } from 'react-router-dom'

const Score = () => {
    const location =useLocation();
    const navigate=useNavigate();
    const ansList=location.state;

    
    const Count = () =>{
        let count=0;
        let num=ansList.length;
        for (let i=0;i<num;i++){
            if (questions[i].ans===ansList[i]){
                count++;
            }
        }
        return count
    }
  return (
    <div>
       <div className='mx-auto w-[35em] text-white bg-zinc-900 mt-40 rounded-xl bg-gray-800 p-10 flex flex-col items-center flex-wrap'>
            <h1 className='text-3xl font-extrabold pb-7'>Congratulations</h1>
            <p className='text-xl'>Your score: {Count()}</p>
            <div className='mt-4'>
                {questions.map((q,index)=>(
                    <div className='mt-2' key={q.ans}>
                        <h1>Q{index+1}: {q.ques}</h1>
                        <h2 className={`${q.ans===ansList[index] ? "text-green-700" : "text-red-700"} font-bold`}>{`Your Answer: `}{ansList[index] ? ansList[index] : "Not Answered"}</h2>
                    </div>
                ))}
            </div>
            <button type='button' className='text-sm bg-black mt-10 p-2 rounded-md border-slate-600 border-2 hover:bg-zinc-700' 
            onClick={()=>navigate('/',{replace: true})}>Start Again</button>
    </div>
    </div>
  )
}

export default Score

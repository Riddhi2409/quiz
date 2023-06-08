import React from 'react'
import { useNavigate ,useHistor} from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
  return (
    <div className='mx-auto w-[30em] text-white bg-zinc-900 mt-40 rounded-xl bg-gray-800 p-10 flex flex-col items-center flex-wrap'>
      <h1 className='text-3xl font-extrabold pb-7'>Welcome to the Challenge</h1>
      <p>You will be presented with 3 MCQS</p>
      <p>Can you score 100%</p>
      <button type='button' className='text-sm bg-black mt-10 p-2 rounded-md border-slate-600 border-2 hover:bg-zinc-700' 
      onClick={()=>navigate('/quiz',{replace: true})}>Start Quiz</button>
    </div>
  )
}

export default Home

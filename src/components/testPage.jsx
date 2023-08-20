import React, { useState, useEffect } from 'react';
import Question from './question.jsx';
import { useTestContext } from '../context.jsx';
import {Link} from 'react-router-dom'

const TestPage = () => {
  const [total , setTotal ] = useState(0)
  const [displayTotal , isDisplayTotal ] = useState(false)
  const { questions ,currentQuestionIndex,setCurrentQuestionIndex } = useTestContext();
   

  const nextQuestion = () => {
      if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }else{
          isDisplayTotal(true) 
        }
    };

  return (
    <div className="bg-orange-50 min-h-screen flex items-center justify-center">
      {questions ? (
              <div className="max-w-md mx-auto">
              {displayTotal ? (
                  <div className='flex flex-col h-full justify-around'>

                   <Link to={'/'} className='bg-black text-white text-center text-lg p-5 rounded mb-5'>Exit</Link>
                  <h1 className='text-4xl mt-5'>Total : {total} / {questions.length}</h1>
                  </div>
              ) : ( 
                  <Question
                  question={questions[currentQuestionIndex]}
                  onNextQuestion={nextQuestion}
                  setTotal={setTotal}
                  total={total}
                  />
              )}
        </div>
      ):(
        <div className="animate-spin rounded-full h-16 w-16 border-t-8 border-red-500"></div>
      )}
    </div>
  );
};

export default TestPage;

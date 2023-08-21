import React, { useState } from 'react';
import Question from './question.jsx';
import { useTestContext } from '../context.jsx';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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

                   <motion.div initial={{ scale:0 }} animate={{scale:1}} className='bg-black text-white text-center text-lg p-5 rounded mb-5'>
                   <Link to={'/'} className=''>Exit</Link>
                   </motion.div>
                    <div className="overflow-hidden">
                    <div 
                   className='text-4xl mt-5 flex items-center'>Total :  <motion.h1 className='' initial={{ y:150 }} animate={{ y:0 }}> {total} </motion.h1> / {questions.length}
                  </div>
                    </div>
                  </div>
              ) : ( 
                  <Question
                  key={currentQuestionIndex}
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

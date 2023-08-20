import React, { useState, useEffect } from 'react';
import Question from './question.jsx';
import { useTestContext } from '../context.jsx';

const TestPage = () => {
  const [total , setTotal ] = useState(0)
  const [displayTotal , isDisplayTotal ] = useState(false)
  const { questions ,currentQuestionIndex,setCurrentQuestionIndex } = useTestContext();
  
 
  const nextQuestion = () => {
      if (currentQuestionIndex < questions.length - 1) {
          console.log(currentQuestionIndex);
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          localStorage.setItem('index', JSON.stringify(currentQuestionIndex));
        }else{
          isDisplayTotal(true) 
          setCurrentQuestionIndex(0)
        }
    };

  return (
    <div className="bg-orange-50 min-h-screen flex items-center justify-center">
      {questions ? (
              <div className="max-w-md mx-auto">
              {displayTotal ? (
                  <h1>{total} / {questions.length}</h1>
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

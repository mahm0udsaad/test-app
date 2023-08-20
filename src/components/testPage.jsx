import React, { useState, useEffect } from 'react';
import Question from './question.jsx';

  

const TestPage = ({questions}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [total , setTotal ] = useState(0)
  const [displayTotal , isDisplayTotal ] = useState(false)

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }else{
        isDisplayTotal(true)
    }
    };

  return (
    <div className="bg-orange-50 min-h-screen flex items-center justify-center">
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
    </div>
  );
};

export default TestPage;

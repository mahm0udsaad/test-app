import React, { useState } from 'react';

const Question = ({ question, onNextQuestion ,total ,setTotal}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onNextQuestion()
    if(question.correctAnswer === option){
        setTotal(total + 1)
    }
  };

  const renderOptions = () => {
    return question.options.map((option, index) => (
      <button
        key={index}
        onClick={() => handleOptionSelect(option)}
        className={`block w-full mb-3 p-5 rounded ${
          selectedOption === option
            ? 'bg-red-500 text-white'
            : 'bg-white text-black'
        }`}
      >
        {option}
      </button>
    ));
  };

  return (
    <>
        {question ?   
          <div className="p-8 rounded-lg">
           <h2 className="text-2xl lg:text-5xl mb-5 lg:mb-10">{question.question}</h2>
           {renderOptions()}
         </div>
         :
         <div className="animate-spin rounded-full h-16 w-16 border-t-8 border-red-500"></div>
         }
    </>
  );
};

export default Question;

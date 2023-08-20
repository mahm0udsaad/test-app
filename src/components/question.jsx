import React, { useState } from 'react';

const Question = ({ question, onNextQuestion ,total ,setTotal}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onNextQuestion()
    if(question.correctOption === option){
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
          <div className="p-8 rounded-lg">
           <h2 className="text-2xl lg:text-5xl mb-5 lg:mb-10">{question.text}</h2>
           {renderOptions()}
        </div>
    </>
  );
};

export default Question;

import React, { useState, useEffect } from 'react';
import { motion ,AnimatePresence} from 'framer-motion';

const Question = ({ question, onNextQuestion, total, setTotal }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setSelectedOption(null)
  }, [question]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onNextQuestion();
    if (question.correctAnswer === option) {
      setTotal(total + 1);
    }
  };
  const renderOptions = () => {
    return question.options.map((option, index) => (
      <AnimatePresence>
        <motion.button
        key={index}
        onClick={() => handleOptionSelect(option)}
        className={`block w-full mb-3 p-5 rounded hover:bg-black hover:text-white ease-out duration-300 ${
          selectedOption === option ? 'bg-red-500 text-white' : 'bg-white text-black'
        }`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        {option}
      </motion.button>
      </AnimatePresence>
    ));
  };

  return (
    <>
      {question ? (
        <div className="p-8 rounded-lg">
          <div className='overflow-hidden'>
          <motion.div
           initial={{ y:100 }}
           animate={{ y:0 }}
           className="text-2xl lg:text-5xl mb-5 lg:mb-10">{question.question}</motion.div>
          </div>
          <div>{renderOptions()}</div>
        </div>
      ) : (
        <div className="animate-spin rounded-full h-16 w-16 border-t-8 border-red-500"></div>
      )}
    </>
  );
};

export default Question;

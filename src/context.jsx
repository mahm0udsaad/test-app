import React, { createContext, useState, useContext , useEffect} from 'react';
import axios from 'axios';
const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const [test , setTest ] = useState('')
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(()=>{
      console.log(currentQuestionIndex);
      if(test){
        axios.post('http://localhost:3000/test',{data:test})
        .then(res =>{
          const storedQuestions = JSON.stringify(res.data.questions);
          localStorage.setItem('questions', storedQuestions)
        })
        .catch(err => console.error(err))
      }
    const getQuestions=()=>{
      const storedQuestions = localStorage.getItem('questions')
      const parsedQuestions = JSON.parse(storedQuestions)
      setQuestions(parsedQuestions)
    }
    getQuestions()
    },[test])

  return (
    <TestContext.Provider value={{currentQuestionIndex,setCurrentQuestionIndex, questions, setQuestions,test , setTest}}>
      {children}
    </TestContext.Provider>
  );
};

export const useTestContext = () => {
  return useContext(TestContext);
};

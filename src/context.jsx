import React, { createContext, useState, useContext , useEffect} from 'react';
import axios from 'axios';
const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const [test , setTest ] = useState(null)
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
   useEffect(()=>{
      if(test){
        axios.post('http://localhost:3000/test',{data:test})
        .then(res =>{
          console.log(res.data);
          setCurrentQuestionIndex(0)
          setQuestions(res.data.questions)
        })
        .catch(err => console.error(err))
      }
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

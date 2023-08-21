import React, { createContext, useState, useContext , useEffect} from 'react';
import axios from 'axios';
const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const [test , setTest ] = useState(null)
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
   useEffect(()=>{
      const storedTest = localStorage.getItem('test')
      const isMatch = storedTest == test ;
      if(test){
        localStorage.setItem('test',test)
        axios.post('https://naughty-moth-tunic.cyclic.cloud/test',{data:test})
        .then(res =>{
         isMatch ? setCurrentQuestionIndex(JSON.parse(localStorage.getItem('index'))+1) : setCurrentQuestionIndex(0)
          setQuestions(res.data.questions)
        })
        .catch(err => console.error(err))
      }else{
        setTest(localStorage.getItem('test'))
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

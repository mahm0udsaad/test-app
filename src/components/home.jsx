import React, { useEffect } from 'react';
import usePopup from './hooks/usePopup';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCalculator, faFlask, faHistory } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const { PopUp: EnglishPopup } = usePopup({ path: 'English' ,icon:faBook  ,color:''});
    const { PopUp: MathPopup } = usePopup({ path: 'Math' ,icon:faCalculator  ,color:'orange'});
    const { PopUp: SciencePopup } = usePopup({ path: 'Science' ,icon:faFlask ,color:'green' });
    const { PopUp: HistoryPopup } = usePopup({ path: 'Math' ,icon:faHistory  ,color:'red'});
  
  return (
    <div
      className="main font-Font2 h-screen flex flex-col justify-center items-center"
    >
      <h1 className="lg:text-4xl text-2xl  mb-5 text-center text-white font-semibold ">Welcome to the Test App</h1>
      <p className="text-lg mb-8">Get ready to test your knowledge!</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
       <MathPopup />
       <EnglishPopup />
      <HistoryPopup />
      <SciencePopup />
       </div>
    </div>
  );
};


export default Home;

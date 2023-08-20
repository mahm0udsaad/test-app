import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCalculator, faFlask, faHistory } from '@fortawesome/free-solid-svg-icons';
import { useTestContext } from '../context';

const Home = () => {
    const { setTest , setCurrentQuestionIndex ,currentQuestionIndex} = useTestContext()
    
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvbG9ycyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDI%3D&auto=ffit=crop&w=400&q=60';

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="bg-inherit h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl mb-5 text-white font-semibold ">Welcome to the Test App</h1>
      <p className="text-lg mb-8 text-gray-600">Get ready to test your knowledge!</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
       
       <Link
         to="/test"
        onClick={()=> setTest('English')}
         className="bg-white p-5 rounded-lg w-11/12 shadow-md text-center hover:opacity-70 transition duration-300"
       >
         <FontAwesomeIcon style={{color:'122C34'}} icon={faBook} className="text-3xl mb-2" />
         <p>
           English
         </p>
       </Link>
       <Link
         to="/test"
        onClick={()=> setTest('Math')}
         className="bg-white p-5 rounded-lg w-11/12 shadow-md text-center hover:opacity-70 transition duration-300"
       >
         <FontAwesomeIcon style={{color:'E8871E'}} icon={faCalculator} className="text-3xl mb-2 text-gray-600" />
         <p>
           Math
         </p>
       </Link>
       <Link
         to="/test"
        onClick={()=> setTest('Science')}
         className="bg-white p-5 rounded-lg w-11/12 shadow-md text-center hover:opacity-70 transition duration-300"
       >
         <FontAwesomeIcon  style={{color:'6CCFF6'}} icon={faFlask} className="text-3xl mb-2 text-gray-600" />
         <p>
           Science
         </p>
       </Link>
       <Link
         onClick={()=> setTest('History')}
         to="/test"
         className="bg-white p-5 rounded-lg w-11/12 shadow-md text-center hover:opacity-70 transition duration-300"
       >
         <FontAwesomeIcon style={{color:'BAD4AA'}} icon={faHistory} className="text-3xl mb-2 text-gray-600" />
         <p>History</p>
       </Link>
       </div>
    </div>
  );
};


export default Home;

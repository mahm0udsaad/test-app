import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTestContext } from '../../context';
const usePopup = ({path , icon ,color}) => {
    const { setTest , setCurrentQuestionIndex ,currentQuestionIndex} = useTestContext()

    const PopUp=()=> ( 
        <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="bg-white p-5 rounded-lg w-11/12 shadow-md text-center hover:opacity-70 transition duration-300"
      >
          <Link
         to="/test"
        onClick={()=> setTest(`${path}`)}
       >
         <FontAwesomeIcon style={{color:color}} icon={icon} className="text-3xl mb-2 text-gray-600" />
         <p>
           {path}
         </p>
       </Link>
      </motion.div>
     );
     return {PopUp}
}
 
export default usePopup;
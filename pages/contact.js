import { useState } from "react";
import { IconContext } from "react-icons";
import {RiSendPlane2Fill} from "react-icons/ri"
export default function Contact() {
  const [hasTakenEmail, setTakeEmail] = useState(false);
  const [hasTakenName, setTakeName] = useState(true);
  const [hasTakenFeedback, setTakeFeedBAck] = useState(false);
  const [msg, setMsg] = useState("");

  const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const Prompt = ({prmt,fullInp})=>{
    return <div className="col w-[80%] items-start justify-center space-y-4">
        <h1 className="text-base text-lime-400 ">{prmt}</h1>
        {fullInp ? <div className="row justify-between items-center w-full"> <textarea
              type="text"              
              className="bg-transparent w-[86%] h-32 border border-gray-800 rounded-lg  text-gray-400 focus:border-none focus:outline-none"
            /><IconContext.Provider value={{ className: "w-4 font-extrabold text-green-300 cursor-pointer h-4 hover:scale-125" }}> <RiSendPlane2Fill /></IconContext.Provider></div> : <input
            type="text"
            className="bg-transparent w-[86%] text-gray-400 focus:border-none focus:outline-none"
          />}
               
          
        </div>
}

const validateTxt = (inp) => inp.length > 2

  return (
    <div className="col w-full h-full justify-start items-center  overflow-auto">
      <div className="p-4 bg-gray-900 border border-gray-800 rounded-md text-base w-[90%] md:w-[45%] mt-[9%] mb-3 md:mt-[8%] pl-6 col space-y-4  font-mono">
       
          <Prompt
            prmt={`Enter Your Full Name:`}
        
          />
     
       
          <Prompt
            prmt={`Enter Your Email:`}
          />
       

        
          <Prompt
            prmt={`Enter Your Feedback (Optional):`}
            fullInp
          />
     
      </div>
      <div className="text-gray-600 text-sm mt-3 font-mono w-[90%] md:w-[45%] row pl-3">
        <h1>{msg}</h1>
      </div>
    </div>
  );
}

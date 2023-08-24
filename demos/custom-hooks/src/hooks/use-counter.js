import { useState, useEffect } from "react";

const useCounter = (forwards = true, step = 1) => {
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    
    const interval = setInterval(() => {
        if (forwards) {
            setCounter((prevCounter) => prevCounter + step);
        } else {
            setCounter((prevCounter) => prevCounter - step);
        }
      
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards, step]);

  return counter;
}


export default useCounter;
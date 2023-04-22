import { useState,useEffect } from "react";

const useDebunle = (val,delay)=> {
  const [value,setValue] = useState(val);

  useEffect(()=>{
    const timer = setTimeout(() => {
      setValue(val);
    }, delay);
    return ()=>{
      clearTimeout(timer);
    }
  },[val,delay])

  return value;
}
export default useDebunle;
import React,{ useState,useEffect } from "react";
const useDebunle = (val:any,delay:number=1000) => {
  console.log('val',val)
  const [value,setValue] = useState(val);

  useEffect(()=>{
    console.log('dzp1')
    const timer = setTimeout(()=>{
      console.log('dzp2')
      setValue(val);
    },1500)
    return ()=>{
      timer && clearTimeout(timer);
    }
  },[val])
  
  return value;
}
export default useDebunle;
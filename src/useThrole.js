import { useCallback,useRef } from "react";
const useThrole = (val,delay) => {
  const timer = useRef(-1);
  const throle = useCallback(()=>{
    if(timer.current!==-1) return ;
    timer.current = setTimeout(() => {
      val();
      console.log('deal')
      timer.current=-1;
      clearTimeout(timer.current);
    }, delay);
  },[val,delay])

  return throle;
}
export default useThrole;
import React,{useEffect,useRef} from "react";
const ImgLazy = (props:{src:string,alt?:string}) => {
  const {src,alt} = props;
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(()=>{
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          if(imgRef.current) imgRef.current.src = src;
          observer.disconnect()
        }
      })
    })
    // 添加对某个元素的监听
    imgRef.current && observer.observe(imgRef?.current);
    return ()=>{
      observer.disconnect()
    }
  },[])
  return < img alt={alt} ref={imgRef}/>
}
export default ImgLazy;
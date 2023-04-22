import React,{ useState,useEffect } from "react";
import style from "./style.module.css";
interface PropsType{
  pageSize?:number,//一页展示个数
  total?:number//总数据,
  onChange?:(e:number)=>void
}
const Pagination = (props:PropsType) => {
  const {
    pageSize=0,
    total=0,
    onChange
  } = props;
  const [currentIndex,setCurrentIndex] = useState(1);//当前页面索引index
  const [totalPageNumber,setTotalPageNumber] = useState(0);//总共页码数
  useEffect(()=>{
    setTotalPageNumber(Math.ceil(total/pageSize));
  },[total,pageSize])
  return (
    <div>
      {new Array(totalPageNumber).fill(0)?.map((item:any,index:number)=>(
        <div 
          style={{border:'1px solid red'}}
          className={index+1===currentIndex?style.pagination_actived:''}
          onClick={()=>{
            setCurrentIndex(index+1);
            onChange && onChange(index+1)
          }}
        >
          {index+1}
        </div>
      ))}
    </div>
  )
}
Pagination.defaultProps = {
  pageSize:10,
  total:0
}

export default Pagination;
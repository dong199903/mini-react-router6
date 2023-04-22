import React,{useContext} from "react";
import {RouterContext} from "./Router";
interface locationsProps {
  history?:any
}
const useNavigate = () => {
  const {history} = useContext(RouterContext) as locationsProps;
  return history
}
export default useNavigate;
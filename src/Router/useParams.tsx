import React,{useContext} from "react";
import {RouterContext} from "./Router";
interface locationsProps {
  activeRoute:any,
  location:any
}
const useParams = () => {
  const {activeRoute,location} = useContext(RouterContext) as locationsProps;
  const {path} = activeRoute.props;
  const {pathname} = location;
  let arr = path.split('/')
  if(arr[arr.length-1][0]!==':') return {};
  const key = path.split('/').pop().slice(1);
  const val = pathname.split('/').pop();
  return {[key]:val}
}
export default useParams;
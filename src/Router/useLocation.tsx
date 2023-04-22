import React,{useContext} from "react";
import {RouterContext} from "./Router";
interface locationsProps {
  location:any
}
const useLocations = () => {
  const {location} = useContext(RouterContext) as locationsProps;
  return location
}
export default useLocations;
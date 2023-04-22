import React from "react";
interface RouteProps {
  path?:string
  element?:React.ReactElement
  children?:React.ReactElement
}
const Route = (props:RouteProps) => {
  const {
    element,
  } = props;
  return (
    <>
      {element}
    </>
  )
}
export default Route;
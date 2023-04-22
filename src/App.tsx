import React from "react";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import { Router,Route,useRoutes } from "./Router";
const arr = [
  {
    path:"/",
    element:<Page1/>
  },
  {
    path:"/page2",
    element:<Page2/>
  },
  {
    path:"/page3/:id",
    element:<Page3/>
  }
]
const Home = () => {
  const beforeEnter = (item:any,nav:any) => {
    if(item.props.path.includes('page3')){
      if(!localStorage.getItem('userInfo'))
        nav.push('/page2');
    }
  }
  return (
    <Router beforeEnter={beforeEnter}>
      <Route path='/' element={<Page1/>}/>
      <Route path='/page2' element={<Page2/>}/>
      <Route path='/page3/:id' element={<Page3/>}/>
    </Router>
  )
  //return useRoutes(arr,beforeEnter)
}
export default Home;
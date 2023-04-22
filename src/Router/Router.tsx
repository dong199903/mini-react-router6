import React,{createContext,useState,useEffect} from "react";
import { createBrowserHistory } from 'history';
export const RouterContext = createContext({});
const Router = (props:any) => {
  const {children,beforeEnter} = props;
  const history = createBrowserHistory();
  const [ location, setLocation ] = useState(history.location);
  let activeRoute = null;//当前激活的路由
  const unHisory = history.listen((location:any)=>{
    setLocation(location.location)
  })
  useEffect(()=>{
    return () => {
      unHisory();
    }
  },[])
  function MatchRouter(strRoute:string,changeStr:string) {
    const arr1 = strRoute.split('/');
    const arr2 = changeStr.split('/');
    const arr3 = arr1.filter(item=>{
      if(item) return item;
    })
    const arr4 = arr2.filter(item=>{
      if(item) return item;
    })
    if(arr3.length !== arr4.length) return false;
    //遍历比较路由信息
    for(let i=0;i<arr3.length;i++) {
      if(arr3[i][0]!==':') {
        if(arr3[i]!==arr4[i]) return false;
        else return true;
      }
    }
    return true;
  }
  const ele = React.Children.map(children,item=>{
    const elementName = item.type.name;//获取组件名称
    if(elementName !== 'Route') return null;
    //1.1 动态路由判断
    const isMatch = MatchRouter(item.props.path,location.pathname)
    if(isMatch) {
      beforeEnter && beforeEnter(item,history);
      activeRoute = item;
      return React.cloneElement(item)
    }
  })
  
  return (
    <RouterContext.Provider value={{
      location:location,
      history:history,
      activeRoute,
    }}>
      {ele}
    </RouterContext.Provider>
  )
}
export default Router;
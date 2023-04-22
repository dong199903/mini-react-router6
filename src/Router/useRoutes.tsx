import React from "react";
import Router from "./Router";
import Route from "./Route";

const useRoutes = (routes:any,beforeEnter:any) => {
  /**路由数组渲染成routes和route */
  return (
    <Router beforeEnter={beforeEnter}>
      {routes.map((item:any)=>(
        <Route
          path={item.path}
          element={item.element}
          key={item.path}
        />
      ))}
    </Router>
  )
}
export default useRoutes;
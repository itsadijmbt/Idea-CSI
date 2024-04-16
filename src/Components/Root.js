
import About from "./About";
import Header from "./Header";
import { Outlet } from "react-router-dom";function Root() {

  return(
   <>
   <Header></Header>

   <Outlet></Outlet>
   </>
 
  )
 
 }
 export default Root
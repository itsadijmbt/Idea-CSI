import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import DataController from "./Components/DataController";

import { TextActions } from "./redux/TextSlice";
import store from "../src/redux/TextSlice";
import DisplayOutput from "./Components/DisplayOutput";
import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Features from "./Components/Features";
import IntroContainer from "./Components/IntroContainer";
import Root from "./Components/Root";
import ImageRenderPage from "./Components/ImageRenderPage";
import About from "./Components/About";
import Combinator from "./Components/Combinator";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
     element: <IntroContainer></IntroContainer>,
     
    },
    {
      path: "/root",
     element: <Root></Root>,
     children: [
      {
        path: "/root/images",
        element: <Combinator></Combinator>,
      
      },
      {
        path: "/root/about",
       element: <About></About>,
      }
     ]   
    }
,

  ])
  return (
    <RouterProvider router={router}>

   
    </RouterProvider>
  );
}

export default App;

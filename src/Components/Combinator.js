import DataController from "./DataController";
import ImageRenderPage from "./ImageRenderPage";
import { useState } from "react";
export default function Combinator(prop)
{
  const loadit=(data)=>{
    ss(data)
    console.log('data in combiner', data)
  }
    const [s,ss]=useState('');

  return (
    <>
      <DataController  imageLoader={loadit}></DataController>
      <ImageRenderPage sender={s}></ImageRenderPage>
    </>
  );
}

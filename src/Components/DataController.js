import { useEffect } from "react";
import store, { TextActions } from "../redux/TextSlice";
import { useDispatch, useSelector } from "react-redux";
export default function DataController(prop) {
    const dispatch = useDispatch();
    const exData = useSelector((state) => state.textSlice.text);
 

 const outputArr={ 
    total: 100,
     page: 1,
     results: {
      variation: [
       {
           description:
             "Cute and adorable cartoon blue/grey thai ridgeback baby in a coffeepot, fantasy, dreamlike, surrealism, super cute, trending on artstation",
  
           urls: [
             "https://image.lexica.art/full_jpg/22c0deee-ae18-4b8f-a8b9-8c24b2d02f38",
             "https://image.lexica.art/full_jpg/238bade0-2fc1-4e6f-9abf-f178af2aa707",
             "https://image.lexica.art/full_jpg/1276ed97-0e59-434f-9831-c70d17635803",
             "https://image.lexica.art/full_jpg/766f87bb-f1b8-4219-bd4f-aa93cd150820",
           ],
         },
         {
           description:
             "Cute and adorable cartoon blue/grey thai ridgeback baby in a coffeepot, fantasy, dreamlike, surrealism, super cute, trending on artstation",
  
           urls: [
             "https://image.lexica.art/full_jpg/22c0deee-ae18-4b8f-a8b9-8c24b2d02f38",
             "https://image.lexica.art/full_jpg/238bade0-2fc1-4e6f-9abf-f178af2aa707",
             "https://image.lexica.art/full_jpg/1276ed97-0e59-434f-9831-c70d17635803",
             "https://image.lexica.art/full_jpg/766f87bb-f1b8-4219-bd4f-aa93cd150820",
           ],
         },
         {
           description:
             "Cute and adorable cartoon blue/grey thai ridgeback baby in a coffeepot, fantasy, dreamlike, surrealism, super cute, trending on artstation",
  
           urls: [
             "https://image.lexica.art/full_jpg/22c0deee-ae18-4b8f-a8b9-8c24b2d02f38",
             "https://image.lexica.art/full_jpg/238bade0-2fc1-4e6f-9abf-f178af2aa707",
             "https://image.lexica.art/full_jpg/1276ed97-0e59-434f-9831-c70d17635803",
             "https://image.lexica.art/full_jpg/766f87bb-f1b8-4219-bd4f-aa93cd150820",
           ],
         },
         {
           description:
             "Cute and adorable cartoon blue/grey thai ridgeback baby in a coffeepot, fantasy, dreamlike, surrealism, super cute, trending on artstation",
  
           urls: [
             "https://image.lexica.art/full_jpg/22c0deee-ae18-4b8f-a8b9-8c24b2d02f38",
             "https://image.lexica.art/full_jpg/238bade0-2fc1-4e6f-9abf-f178af2aa707",
             "https://image.lexica.art/full_jpg/1276ed97-0e59-434f-9831-c70d17635803",
             "https://image.lexica.art/full_jpg/766f87bb-f1b8-4219-bd4f-aa93cd150820",
           ],
         },
     ],
       images: [
         "https://image.lexica.art/full_jpg/22c0deee-ae18-4b8f-a8b9-8c24b2d02f38",
         "https://image.lexica.art/full_jpg/238bade0-2fc1-4e6f-9abf-f178af2aa707",
         "https://image.lexica.art/full_jpg/1276ed97-0e59-434f-9831-c70d17635803",
         "https://image.lexica.art/full_jpg/766f87bb-f1b8-4219-bd4f-aa93cd150820",
      ],
     },
   }
 
   const url = 'https://image-generator-using-text-descriptions-fast-cheap3.p.rapidapi.com/v1/inference/runwayml/stable-diffusion-v1-5';
   const options = {
     method: 'POST',
     headers: {
       'content-type': 'application/json',
       'X-RapidAPI-Key': '10a9b01b41mshc43ddf9dac7100dp1517fbjsn554c737e92bd',
       'X-RapidAPI-Host': 'image-generator-using-text-descriptions-fast-cheap3.p.rapidapi.com'
     },
     body: {
       prompt: 'a cyberpunk city, hyperrealistic, high resolution, 8k',
       negative_prompt: 'ugly, poorly drawn, disfigured, oversaturated, low-res, deformed, blurry, bad anatomy, malformed, blur, out of focus, disgusting',
       num_inference_steps: 25,
       guidance_scale: 7.5,
       width: 768,
       height: 768,
       seed: 0
     }
   };
async function fetchData() {
    try {
        const response = await fetch(url, options);
        if(!response.ok)
        {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.text();
     
        console.log(result)
     prop.imageLoader(result)
        dispatch(TextActions.output(outputArr));
    } catch (error) {
        console.error(error);
    }
}
/*
const url = `https://ai-image-art-generator.p.rapidapi.com/?prompt=${exData}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '10a9b01b41mshc43ddf9dac7100dp1517fbjsn554c737e92bd',
		'X-RapidAPI-Host': 'ai-image-art-generator.p.rapidapi.com'
	}
};
async function fetchData(){
try {
	const response = await fetch(url, options);

  if(!response.ok)
  {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const result = await response.text();
  prop.imageLoader(result)
	console.log(result);
} catch (error) {
	console.error(error);
}
}*/
 
 
useEffect(()=>{
  fetchData();
},[exData])
 



 
  
}

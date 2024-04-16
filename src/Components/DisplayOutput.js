/*  import React, { useContext } from "react";
import { Output } from "../redux/TextSlice";
import { NavLink } from "react-router-dom";
export default function DisplayOutput() {
  const data = useContext(Output);
  const mainArr = [];
  const trial = [...data];

 const tester = {
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
  };

 // console.log(tester.results.images)

 let i = 0;
  while (trial[0].images[i] != undefined || trial[0].images[i] != null) {
    //console.log(trial[0].images[i])
    mainArr.push(trial[0].images[i]);
    i++;
  }
  

  return(
  <>
  <h1>OUTPUT HERE</h1>
  
   
     {mainArr.map((data,index)=>(
        <div className="key">
          
          <h1>{index}</h1>
          <a href={data}>View</a>
          <img src={data}
          width={200} height={200}
          placeholder={data}
          effect="blur"
          ></img>
          
        </div>
     ))}


   

</>)
}
*/
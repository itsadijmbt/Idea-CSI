import { configureStore, createSlice, current } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";
import { createContext, useReducer } from "react";

const textC = { text: [" "], outputText: [],outputArr:{}};


const textSlice = createSlice({
  name: "text",
  initialState: textC,
  reducers: {
    addText: (state, action) => {
      state.text = action.payload;
      console.log("promt received in store");
     console.log(state.text);
    },
    output: (state, action) => {
    
 
     
         state.outputArr=action.payload        
   

    },
  },
});



const store = configureStore({
  reducer: {
    textSlice: textSlice.reducer,
  },
});

export const TextActions = textSlice.actions;

export default store;

import { useEffect, useState } from "react";

export const dskfjhksdajkjads = "";

import React from "react";
let autoInterval: any;
let number = 0
export default function CustomSlider(param:string[]) {
    
 const [first, setfirst] = useState(0)
  function ehy() {
    
   number===param.length-1? number=0: number++
   setfirst(number)
   
   
  }
  useEffect(() => {
    autoInterval = setInterval(ehy, 5000);
    
    return () => clearInterval(autoInterval);
  });

  return param?.length>0?param[first]:[];
}

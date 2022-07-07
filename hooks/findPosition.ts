import { useEffect, useState } from "react";

export function FindPosition(){
    const [coordiante, setcoordiante] = useState(false);


    function findscroll() {
        if (window.scrollY > 180) {
          setcoordiante(true);
        } else {
          setcoordiante(false);
        }
      }
    
    
    
      useEffect(() => {
        window.addEventListener("scroll", findscroll);
        /*   return window.removeEventListener('scroll',findscroll) */
      }, []);

      return coordiante
}


export function WithRef(positionDrop:any){
    const [coordiante, setcoordiante] = useState(false);
    const selectTopOrBottom =()=>{
        if (typeof window !=='undefined') {
        return  window.innerHeight - 180 < positionDrop?.current?.getBoundingClientRect()?.y?  setcoordiante(true):setcoordiante(false);
        }
      
       
      }


      useEffect(() => {
        selectTopOrBottom()
        window.addEventListener("scroll", selectTopOrBottom);
        /*   return window.removeEventListener('scroll',findscroll) */
      }, []);

      return coordiante
}
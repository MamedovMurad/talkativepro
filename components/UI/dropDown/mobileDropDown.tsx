import React, { useEffect, useState } from "react";
import { ArrowSvg } from "../../../svg/ArrowSVG";
import { IconSVG } from "../../../svg/userSvg";
import styles from './index.module.css'

type MobileDropDOwnProps = {
    element:any,
    entity:{link:string,title:string}[],
   style?:any,
   CB?:any,

}

const MobileDropDOwn:React.FC<MobileDropDOwnProps> = ({element,entity,style,CB}) => {
    const wrapperRef = React.useRef<any>();
    const [active, setactive] = useState(false)

    function handleClick(){
      setactive(true)
      CB&& CB(true)
    }
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
        if (wrapperRef && !wrapperRef.current.contains(event.target)) {
         setactive(false)
       CB&& CB(false)
          
        }
      }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

    return (
        <div ref={wrapperRef} className={styles.staticDrop}>
           <div onClick={handleClick} style={{display:'flex',gap:'0 10px'}}> {element} </div>
          {
            active&&<ul style={style}>
          {entity.map(item=>(
            <li key={item.link}>{item.title}</li>
          ))}
           </ul>
          } 
        </div>
    );
}
 
 
export default MobileDropDOwn;
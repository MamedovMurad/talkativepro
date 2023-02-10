import React, { useEffect, useState } from "react";
import { ArrowSvg } from "../../../svg/ArrowSVG";
import { IconSVG } from "../../../svg/userSvg";
import styles from './index.module.css'

type MobileDropDOwnProps = {
    data:{title:string, link:string}[]
}

const MobileDropDOwn:React.FC<MobileDropDOwnProps> = ({data}) => {
    const wrapperRef = React.useRef<any>();
    const [active, setactive] = useState(false)

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
        if (wrapperRef && !wrapperRef.current.contains(event.target)) {
         setactive(false)
         
          
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
           <div onClick={()=>setactive(true)} style={{display:'flex',gap:'0 10px'}}> <span ><IconSVG/></span> <i style={{transform:'translateY(5px)'}}><ArrowSvg width={'19px'} height="14px" color="white"/></i> </div>
          {
            active&&<ul>
            <li>Profilə keçid</li>
            <li>Redaktə et</li>
            <li>Çıxış</li>
           </ul>
          } 
        </div>
    );
}
 
 
export default MobileDropDOwn;
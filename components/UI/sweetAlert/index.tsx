import { useEffect, useState } from "react";
import { CloseSVG } from "../../../svg/closeSVG";
import styles from "./index.module.css";
type SweetAlertSuccessProps = {
  item:{
    body:any,
    show:boolean;
    width?:string
  },
  cb:any
};

const SweetAlertSuccess: React.FC<SweetAlertSuccessProps> = ({item,cb}) => {  
 const active = item.show
 const width = item.width
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "unset";
  }, [active]);

  return (
    <>
      {active && (
        <div
          className={styles.successAlertsSection}
          onClick={() => cb({ type: "setModalpassive"})}
        >
          <div
            style={{width}}
            onClick={(e: React.FormEvent<EventTarget>) => e.stopPropagation()}
          >
            {item.body}
            <span onClick={() => cb({ type: "setModalpassive"})}> <CloseSVG/></span>
          </div>
        </div>
      )}
    </>
  );
};

export default SweetAlertSuccess;

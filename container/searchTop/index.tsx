
import SelectUI from "../../components/UI/Select";
import styles from "./index.module.css";
import Select from "react-select";
import { useState,useEffect, useRef } from "react";
import agent from "../../Api/agent";
import Router from 'next/router'
import { WithRef } from "../../hooks/findPosition";
import useResponsivenenessAdjuster from "../../hooks/useResponsivenenessAdjuster";
import DatePick from "../../components/UI/datepicker";


type SearchTopProps = {
  margin: string;
};

const SearchTop: React.FC<SearchTopProps> = ({ margin }) => {
 const responsive = useResponsivenenessAdjuster(800)
  const [defData, setdefData] = useState<{lang:any, level:any}>({lang:null,level:null})
const [forFilter, setforFilter] = useState<any>({
  level:null,
  date:new Date(),
  lang:null
})
  const customStyles = {
    menuList: (styles:any) => ({
      ...styles,
      background: '#fff'
  }),
  option: (styles:any , {isFocused, isSelected}:any):any => ({
      ...styles,
      background: isFocused
          ? '#E6F9FC'
          : isSelected
              ? '#00C1DD'
              : undefined,
      zIndex: 1
  }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      border: "none",
      display: "flex",
      width: '100%',
     
    }),
    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };


  
  function routeWithParam(){
    Router.push({
      pathname: '/talks',
      query: { level: forFilter.level, date:forFilter.date, lang:forFilter.lang },
  })
  }

  async function fetchDefData() {
    const res=  await agent.Common.langList()
    res&& setdefData({lang:res.data, level:[
      { label: "A1", value: "A1" },
      { label: "A2", value: "A2" },
      { label: "B1", value: "B1" },
      { label: "B2", value: "B2" },
      { label: "C1", value: "C1" },
      { label: "C2", value: "C2" },
    ]})
  }
  const positionDrop = useRef<any>(null);
  

  
  useEffect(() => {fetchDefData()}, [])
  
  return (
    <div className={styles.SearchTop} style={{ margin }} id="SearchTop">
      <div className={styles.datePicker}>
        <DatePick onchange={(e:any)=>setforFilter({...forFilter, date:e})} item={forFilter.date}/>
      <span></span>
 
      </div>
      <div className={styles.selectLang} ref={positionDrop}>
      <Select
      
        menuPlacement={WithRef(positionDrop)?'top':'bottom'}
      id="34567890-"
          options={defData?.lang?.map((item:any)=>({label:item.name, value:item.id}))}
          styles={customStyles}
          placeholder="Söhbətin dili"
          onChange={(val:any)=>setforFilter({...forFilter, lang:val.value})}
        />
      </div>
      <div className={styles.selectLevel}>
        <Select
      menuPlacement={WithRef(positionDrop)?'top':'bottom'}
         id="vv33-"
          options={defData?.level}
          styles={customStyles}
          placeholder="Söhbət səviyyəsi"
          onChange={(val:any)=>setforFilter({...forFilter, level:val.value})}
        />
      </div>
      <div className={styles.buttonParent} onClick={routeWithParam}>
       
        <button></button>
      </div>
    </div>
  );
};

export default SearchTop;

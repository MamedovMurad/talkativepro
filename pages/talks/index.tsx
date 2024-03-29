import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import agent from "../../Api/agent";
import ButtonUI from "../../components/UI/Button";
import TalksContainer from "../../container/talks";
import useResponsivenenessAdjuster from "../../hooks/useResponsivenenessAdjuster";
import Aside from "../../layout/aside";
import { GenericListDto } from "../../Model/DTO";
import { FilterSVG } from "../../svg/filterSVG";
import styles from "./index.module.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
type TalksProps = {

};

let arr: any = [];
let arrNation: any = [];
let arrLevel: any = [];
let date__:any = null
const Talks: React.FC<TalksProps> = () => {
  const [dateLocale, setdateLocale] = useState<any>(null)
    const router = useRouter()
  const [talks, settalks] = useState<GenericListDto<any> | null>(null);
  const [filterActive, setfilterActive] = useState<any>(false)
  const [otherData, setotherData] = useState<{
    lang: { id: number; name: string; code?: string | null, selected?:any }[] | any;
    nation: { id: number; name: string; code?: string , selected?:any}[] | null;
    level: { name: string; id: string , selected?:any}[] | null|any;
  }>({ lang: null, nation: null, level: null });
  /*   const inputSearch = useRef<any>(null); */
  const responsive = useResponsivenenessAdjuster(920)

  async function filterTeacher(param: { group: string; id: number }) {
    settalks(null)
    if (param.group === "Dillər") {
      if (arr.includes(param.id)) {
        arr.splice(arr.indexOf(param.id), 1);
      } else {
        arr.push(param.id);
      }
    } else if (param.group === "Milliyət") {
      if (arrNation.includes(param.id)) {
        arrNation.splice(arr.indexOf(param.id), 1);
      } else {
        arrNation.push(param.id);
      }
    } else if (param.group === "Danışıq səviyyəsi") {
      if (arrLevel.includes(param.id)) {
        arrLevel.splice(arr.indexOf(param.id), 1);
      } else {
        arrLevel.push(param.id);
      }
    }
    const res = await agent.talk.list(arr, arrNation, arrLevel);
    res && res.data && settalks(res.data.entities);


  }

 
  function handlefilterActive(){
    
    
    setfilterActive(false)
  }
  

 async function filterforDate(param:any){
   settalks(null)
   console.log(param.toLocaleDateString());
   const changeddate = param.toLocaleDateString()?.split('-').reverse().join('-') 
  const res = await agent.talk.list(arr, arrNation, arrLevel, changeddate);
  res && res.data && settalks(res.data.entities);
 }
 async function fetchTalks() {
  router.query.lang&&arr.push(router.query.lang);
  router.query.level&&arrLevel.push(router.query.level)
  router.query.date? date__= router.query.date:null
  
  const res = await agent.talk.list(arr, [], arrLevel,date__?.split('-').reverse().join('-'));
  res && res.data && settalks(res.data.entities);
  const lang = await agent.Common.langList();
  const nation = await agent.Common.notianal();

  lang &&
    nation &&
    setotherData({
      ...otherData,
      lang: lang?.data?.map(item=>{
          if (router.query.lang===item.id+'') {
              return {...item, selected:true}
          }else{
           return  item
          }
      }),
      nation: nation.data,
      level: [
        { name: "A1", id: "A1" },
        { name: "A2", id: "A2" },
        { name: "B1", id: "B1" },
        { name: "B2", id: "B2" },
        { name: "C1", id: "C1" },
        { name: "C2", id: "C2" },
      ]?.map(item=>{
          if (router.query.level===item.name) {
              return {...item, selected:true}
          }else{
           return  item
          }
      }),
    });


}
function reset(){
   arr = [];
 arrNation = [];
 arrLevel = [];
 date__ = null
  setotherData({ lang: null, nation: null, level: null })
  fetchTalks();
}
  useEffect(() => {
    fetchTalks();
   
  }, [router.query]);

  return (
    <div className={styles.talks} >
          <div className={styles.fixedFilterBUtton} onClick={()=>setfilterActive(true)}>
          <span><FilterSVG/></span>
          <p>Filterləri göstər</p>
        </div>
      <div className="wrapper">
    
        <div>
          <Aside
            filter={filterActive}
            setfilter={handlefilterActive}
            setList={filterTeacher}
            reset={reset}
            list={[
              { name: "Dillər", children: otherData.lang },
             /*  { name: "Milliyət", children: otherData.nation }, */
              { name: "Danışıq səviyyəsi", children: otherData.level },
            ]}
          />

       <div style={{width:'100%'}}>
       <div className={styles.datePickerfortop}>
        
    {/*       <input type="date" name="" id="" value={router.query?.date} onChange={(e)=>filterforDate(e.target.value) }/> */}
          <DatePicker  dateFormat="Pp"   selected={router.query?.date||dateLocale} onChange={(date)=>{filterforDate(date);setdateLocale(date)}}   placeholderText="Tarix" className={styles.custompicker}/>
          </div>
       <TalksContainer list={talks} width="100%" cb={fetchTalks}/>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Talks;

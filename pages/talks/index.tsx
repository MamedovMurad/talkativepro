import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import agent from "../../Api/agent";
import TalksContainer from "../../container/talks";
import Aside from "../../layout/aside";
import { GenericListDto } from "../../Model/DTO";
import styles from "./index.module.css";
type TalksProps = {};

const Talks: React.FC<TalksProps> = () => {
    const router = useRouter()
  const [talks, settalks] = useState<GenericListDto<any> | null>(null);
  const [otherData, setotherData] = useState<{
    lang: { id: number; name: string; code?: string | null, selected?:any }[] | any;
    nation: { id: number; name: string; code?: string , selected?:any}[] | null;
    level: { name: string; id: string , selected?:any}[] | null|any;
  }>({ lang: null, nation: null, level: null });
  /*   const inputSearch = useRef<any>(null); */
  async function fetchTeacher() {
    const res = await agent.talk.list();
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
  let arr: any = [];
  let arrNation: any = [];
  let arrLevel: any = [];
  async function filterTeacher(param: { group: string; id: number }) {
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
    res && res.data && settalks(res.data);


  }

  console.log(otherData.level,'level');
  

 
  useEffect(() => {
    fetchTeacher();
   
  }, [router.query?.level]);

  return (
    <div className={styles.talks}>
        <div className="wrapper">
            <div className={styles.datePickerfortop}>
          <input type="date" name="" id="" value={router.query?.date} onChange={()=>console.log('log') }/>
          </div>
        </div>
      <div className="wrapper">
    
        <div>
          <Aside
            setList={filterTeacher}
            list={[
              { name: "Dillər", children: otherData.lang },
              { name: "Milliyət", children: otherData.nation },
              { name: "Danışıq səviyyəsi", children: otherData.level },
            ]}
          />

          <TalksContainer  list={talks}/>
        </div>
      </div>
    </div>
  );
};

export default Talks;

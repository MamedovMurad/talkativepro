
import { useEffect, useState } from "react";
import agent from "../../Api/agent";
import CustomCalendar from "../../container/Auth/calendar";
import AuthTeacher from "../../container/Auth/teacher";
import AuthUser from "../../container/Auth/user";
import TalksContainer from "../../container/talks";
import withAuth from "../../Hoc/Private";
import Aside from "../../layout/aside";
import { GenericListDto } from "../../Model/DTO";


type DashboradProps = {};

let arr: any = [];
let arrNation: any = [];
let arrLevel: any = [];
let date__:any = null
const Dashborad: React.FC<DashboradProps> = ({ data }: any) => {
  const [talks, settalks] = useState<GenericListDto<any> | null>(null);

  async function fetchTalks() {
   /*  const res = await agent.talk.list() */
  /*   res.data&& settalks(res.data) */


    const res = await agent.talk.list(arr, [], arrLevel,date__?.split('-').reverse().join('-'));
    res && res.data && settalks(res.data.entities);
    const lang = await agent.Common.langList();
    const nation = await agent.Common.notianal();
  
    lang &&
      nation &&
      setotherData({
        ...otherData,
        lang: lang?.data,
        nation: nation.data,
        level: [
          { name: "A1", id: "A1" },
          { name: "A2", id: "A2" },
          { name: "B1", id: "B1" },
          { name: "B2", id: "B2" },
          { name: "C1", id: "C1" },
          { name: "C2", id: "C2" },
        ]
      });
  }
  
  const [otherData, setotherData] = useState<{
    lang: { id: number; name: string; code?: string | null, selected?:any }[] | any;
    nation: { id: number; name: string; code?: string , selected?:any}[] | null;
    level: { name: string; id: string , selected?:any}[] | null|any;
  }>({ lang: null, nation: null, level: null });
  /*   const inputSearch = useRef<any>(null); */
  

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

  console.log(otherData.level,'level');
  

 async function filterforDate(param:any){
   settalks(null)
   console.log(param);
   const changeddate = param?.split('-').reverse().join('-') 
  const res = await agent.talk.list(arr, arrNation, arrLevel, changeddate);
  res && res.data && settalks(res.data.entities);
 }

  useEffect(() => {!data.loggedAsTeacher&& fetchTalks()}, [])
  
  return (
    <>
      {data.loggedAsTeacher ? (
        <AuthTeacher>
          <CustomCalendar />
        </AuthTeacher>
      ) : (
        <AuthUser >
          <>
    {/*       <Talks widthF="20%" widthS="79%"/> */}
          <Aside width="20%" 
           setList={filterTeacher}
            list={[
              { name: "Dillər", children: otherData.lang },
              { name: "Milliyət", children: otherData.nation },
              { name: "Danışıq səviyyəsi", children: otherData.level },
            ]}
          />
           <TalksContainer width="79%" list={talks}/>
           </>
          </AuthUser>
      )}
    </>
  );
};

export default withAuth(Dashborad);
